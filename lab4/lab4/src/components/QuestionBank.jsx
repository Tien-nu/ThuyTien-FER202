import React, { useEffect, useReducer, useState, useRef } from 'react';
import { Card, Button } from 'react-bootstrap';
import ConfirmModal from './ConfirmModal';

const initialState = {
    questions: [
      {
        id: 1,
        question: 'What is the capital of Australia?',
        options: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
        answer: 'Canberra',
      },
      {
        id: 2,
        question: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        answer: 'Mars',
      },
      {
        id: 3,
        question: 'What is the largest ocean on Earth?',
        options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
        answer: 'Pacific Ocean',
      },
    ],
    currentQuestion: 0,
    selectedOption: '',
    score: 0,
    showScore: false,
};

function quizReducer(state, action) {
    switch (action.type) {
      case 'SELECT_OPTION':
        return { ...state, selectedOption: action.payload };
  
      case 'NEXT_QUESTION':
        const isCorrect = state.selectedOption === state.questions[state.currentQuestion].answer;
        return {
          ...state,
          score: isCorrect ? state.score + 1 : state.score,
          currentQuestion: state.currentQuestion + 1,
          selectedOption: '',
          showScore: state.currentQuestion + 1 === state.questions.length, // Hiển thị điểm khi hết câu hỏi
        };
  
      case 'RESTART_QUIZ':
        return {
          ...initialState, // Reset về trạng thái ban đầu
        };
  
      default:
        return state;
    }
}

function QuestionBank() {
    const [state, dispatch] = useReducer(quizReducer, initialState);
    const { questions, currentQuestion, selectedOption, score, showScore } = state;
    const [showModal, setShowModal] = useState(false);

    // Local UI state
    const [timeLeft, setTimeLeft] = useState(10);
    const [feedback, setFeedback] = useState('');
    const [showFeedback, setShowFeedback] = useState(false);
    const [highScore, setHighScore] = useState(() => {
        const s = localStorage.getItem('quizHighScore');
        return s ? Number(s) : 0;
    });

    // Timer: reset on question change, auto-move to next when reaches 0
  const timeoutRef = useRef(null);
  const expiredRef = useRef(false); // đánh dấu đã xử lý "hết giờ" cho câu hiện tại

  // Khi chuyển câu (currentQuestion) -> reset timer, feedback, và cờ expired
  useEffect(() => {
    if (showScore) return;
    // clear timeout cũ (phòng trường hợp)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    expiredRef.current = false;
    setTimeLeft(10);
    setShowFeedback(false);
    setFeedback('');
  }, [currentQuestion, showScore]);

  // Timer using setTimeout (reactive on timeLeft)
  useEffect(() => {
    if (showScore) {
      // nếu đã show điểm, clear mọi timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      return;
    }

    // Nếu đã về 0 => gọi NEXT_QUESTION nhưng chỉ 1 lần (dùng expiredRef)
    if (timeLeft <= 0) {
      if (!expiredRef.current) {
        expiredRef.current = true;
        // clear timeout an toàn
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        dispatch({ type: 'NEXT_QUESTION' });
      }
      return;
    }

    // nếu timeLeft > 0 thì schedule giảm 1s
    timeoutRef.current = setTimeout(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    // cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [timeLeft, showScore, dispatch]);

  // Update high score khi kết thúc quiz
  useEffect(() => {
    if (showScore) {
      const stored = Number(localStorage.getItem('quizHighScore') || 0);
      if (score > stored) {
        localStorage.setItem('quizHighScore', String(score));
        setHighScore(score);
      } else {
        setHighScore(stored);
      }
    }
  }, [showScore, score]);

  const handleOptionSelect = (option) => {
    // nếu đã hết giờ hoặc đã showScore thì không cho chọn
    if (showScore || timeLeft <= 0) return;

    dispatch({ type: 'SELECT_OPTION', payload: option });

    const isCorrect = option === questions[currentQuestion].answer;
    setFeedback(
      isCorrect ? '✅ Correct! 🎉' : `❌ Incorrect! The correct answer is ${questions[currentQuestion].answer}`
    );
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    // clear timeout sẵn có để tránh timeout cũ còn chạy và dispatch thêm
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    expiredRef.current = true; // đánh dấu đã xử lý "chuyển câu" bằng tay
    dispatch({ type: 'NEXT_QUESTION' });
  };

  const handleRestartQuiz = () => {
    // clear mọi timeout + reset cờ
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    expiredRef.current = false;
    dispatch({ type: 'RESTART_QUIZ' });
    setTimeLeft(10);
    setFeedback('');
    setShowFeedback(false);
    // highScore giữ nguyên (đã lưu ở localStorage nếu cần)
  };

  return (
        <div style={{ maxWidth: '600px', margin: '20px auto' }}>
            <Card>
                <Card.Body>
                    {showScore ? (
                        <div style={{ textAlign: 'center' }}>
                            <h2>Your Score: {score} / {questions.length}</h2>
                            <p>High Score: {highScore} / {questions.length}</p>
                            <Button 
                              variant="primary" 
                              onClick={() => setShowModal(true)}
                            >
                              Restart Quiz
                            </Button>
                            <ConfirmModal
                              show={showModal}
                              title="Confirm Restart"
                              body="Are you sure you want to restart the quiz?"
                              confirmText="Yes, Restart"
                              cancelText="Cancel"
                              onConfirm={() => {
                                handleRestartQuiz();
                                setShowModal(false);
                              }}
                              onClose={() => setShowModal(false)}
                            />
                        </div>
                    ) : (
                        <>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h4>Question {currentQuestion + 1} of {questions.length}</h4>
                                <div style={{ fontWeight: '600', color: timeLeft < 5 ? 'red' : '#333' }}>
                                    Time: {timeLeft}s
                                </div>
                            </div>

                            <p>{questions[currentQuestion].question}</p>
                            <div>
                                {questions[currentQuestion].options.map((option) => (
                                    <Button
                                        key={option}
                                        variant={selectedOption === option ? 'success' : 'outline-primary'}
                                        onClick={() => handleOptionSelect(option)}
                                        style={{ margin: '5px' }}
                                    >
                                        {option}
                                    </Button>
                                ))}
                            </div>

                            {showFeedback && (
                                <div style={{ marginTop: 12, color: feedback.startsWith('✅') ? 'green' : 'red', fontWeight: 600 }}>
                                    {feedback}
                                </div>
                            )}

                            <Button
                                variant="primary"
                                onClick={handleNextQuestion}
                                disabled={!selectedOption}
                                style={{ marginTop: '20px' }}
                            >
                                {currentQuestion + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}
                            </Button>
                        </>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
}

export default QuestionBank;