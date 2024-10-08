import React, { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    layoutPreference: '',
    furnitureType: [],
    installationTime: '',
    designPreference: '',
    budget: 300000,
    name: '',
    phone: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [greeting, setGreeting] = useState(true);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        furnitureType: [...formData.furnitureType, value],
      });
    } else {
      setFormData({
        ...formData,
        furnitureType: formData.furnitureType.filter((item) => item !== value),
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBudgetChange = (e) => {
    setFormData({ ...formData, budget: e.target.value });
  };

  const nextStep = () => {
    if ((step === 0 && !formData.name) ||
      (step === 1 && !formData.layoutPreference) ||
      (step === 2 && formData.furnitureType.length === 0) ||
      (step === 3 && !formData.installationTime) ||
      (step === 4 && !formData.designPreference) ||
      (step === 5 && !formData.budget) ||
      (step === 6 && !formData.phone)) {
      alert('Пожалуйста, ответьте на текущий вопрос перед переходом!');
      return;
    }
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Спасибо, ${formData.name}! Ваши данные отправлены.`);
  };

  const colors = ['#76c7c0', '#ff6347', '#ffd700', '#6495ed', '#ff69b4', '#ffa500', '#32cd32'];
  const progress = Math.round((step / 7) * 100);

  return (
    <div className="quiz-container">
      <h1>Ответьте на 7 вопросов и получите предварительную стоимость и дизайн-проект в подарок!</h1>

      {/* Приветственное сообщение */}
      {greeting && (
        <div className="welcome-message fade-in">
          <h2>Добро пожаловать!</h2>
          <p>
            Пройдите короткий опрос, чтобы получить бесплатную консультацию и 3D-дизайн кухни — всё, что нужно для создания вашей идеальной мебели!
          </p>
          <button className="next-btn" onClick={() => setGreeting(false)}>Начать</button>
        </div>
      )}

      {/* Прогресс-бар */}
      {!greeting && (
        <div className="progress-bar fade-in">
          <p>Шаг {step + 1} из 7</p>
          <div className="progress-background">
            <div className="progress" style={{ width: `${progress}%`, background: colors[step] }}></div>
          </div>
        </div>
      )}

      {/* Вопросы */}
      {!greeting && step === 0 && (
        <div className="question-box fade-in">
          <h2>Как вас зовут?</h2>
          <input
            type="text"
            name="name"
            className="input-field"
            placeholder="Введите ваше имя"
            onChange={handleChange}
          />
          <button className="next-btn" onClick={nextStep}>Далее</button>
        </div>
      )}

      {step === 1 && (
        <div className="question-box fade-in">
          <h2>Форма кухни:</h2>
          <p>Выберите форму, которая лучше всего подходит вашему пространству.</p>
          <div className="options">
            <label>
              <input
                type="radio"
                name="layoutPreference"
                value="Г-образная"
                onChange={handleChange}
              />
              Г-образная
            </label>
            <label>
              <input
                type="radio"
                name="layoutPreference"
                value="П-образная"
                onChange={handleChange}
              />
              П-образная
            </label>
            <label>
              <input
                type="radio"
                name="layoutPreference"
                value="Прямая"
                onChange={handleChange}
              />
              Прямая
            </label>
          </div>
          <button className="next-btn" onClick={nextStep}>Далее</button>
        </div>
      )}

      {/* Добавление модального окна */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Подробнее</h2>
            <p>Эта информация поможет вам лучше понять наши услуги и варианты.</p>
          </div>
        </div>
      )}

      {/* Финальный экран */}
      {step === 6 && (
        <div className="question-box fade-in">
          <h2>Имя и телефон:</h2>
          <p>Как к вам обращаться и куда можно позвонить?</p>
          <input
            type="tel"
            name="phone"
            className="input-field"
            placeholder="Введите ваш номер"
            onChange={handleChange}
          />
          <button className="submit-btn" onClick={handleSubmit}>Отправить</button>
          <button className="next-btn" onClick={() => setShowModal(true)}>Подробнее</button>
        </div>
      )}
    </div>
  );
}

export default App;
