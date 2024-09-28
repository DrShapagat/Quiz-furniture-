import React, { useState, useEffect } from 'react';

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

  // Приветственное сообщение перед началом квиза
  const [greeting, setGreeting] = useState(true);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Обновление имени пользователя при вводе
    if (formData.name) {
      setUserName(formData.name);
    }
  }, [formData.name]);

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

  const progress = Math.round((step / 7) * 100);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Опрос по корпусной мебели</h1>

      {/* Приветственное сообщение */}
      {greeting && (
        <div>
          <h2>Добро пожаловать!</h2>
          <p>Пройдите наш опрос, чтобы получить бесплатную консультацию и узнать предварительную стоимость!</p>
          <button onClick={() => setGreeting(false)}>Начать</button>
        </div>
      )}

      {/* Прогресс-бар */}
      {!greeting && (
        <div style={{ margin: '20px 0' }}>
          <p>Шаг {step + 1} из 7</p>
          <div style={{ background: '#e0e0e0', height: '10px', borderRadius: '5px' }}>
            <div
              style={{
                background: '#76c7c0',
                height: '10px',
                width: `${progress}%`,
                borderRadius: '5px',
              }}
            ></div>
          </div>
        </div>
      )}

      {/* Вопросы */}
      {!greeting && step === 0 && (
        <div>
          <h2>Как вас зовут?</h2>
          <input
            type="text"
            name="name"
            placeholder="Введите ваше имя"
            onChange={handleChange}
          />
          <button onClick={nextStep} style={{ marginTop: '20px' }}>Далее</button>
        </div>
      )}

      {step === 1 && (
        <div>
          <h2>1. Какая форма кухни вас интересует?</h2>
          <div>
            <label>
              <input
                type="radio"
                name="layoutPreference"
                value="Г-образная"
                onChange={handleChange}
              />
              Г-образная
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="layoutPreference"
                value="П-образная"
                onChange={handleChange}
              />
              П-образная
            </label>
            <br />
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
          <button onClick={nextStep} style={{ marginTop: '20px' }}>Далее</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>2. Какой тип мебели вас интересует?</h2>
          <div>
            <label>
              <input
                type="checkbox"
                name="furnitureType"
                value="Кухонная мебель"
                onChange={handleCheckboxChange}
              />
              Кухонная мебель
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="furnitureType"
                value="Гардеробная мебель"
                onChange={handleCheckboxChange}
              />
              Гардеробная мебель
            </label>
          </div>
          <button onClick={nextStep} style={{ marginTop: '20px' }}>Далее</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>3. Когда планируете установить кухню?</h2>
          <div>
            <label>
              <input
                type="radio"
                name="installationTime"
                value="В течение недели"
                onChange={handleChange}
              />
              В течение недели
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="installationTime"
                value="В течение месяца"
                onChange={handleChange}
              />
              В течение месяца
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="installationTime"
                value="Позже"
                onChange={handleChange}
              />
              Позже
            </label>
          </div>
          <button onClick={nextStep} style={{ marginTop: '20px' }}>Далее</button>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2>4. Какой дизайн кухни вам больше нравится?</h2>
          <div>
            <label>
              <input
                type="radio"
                name="designPreference"
                value="Классика"
                onChange={handleChange}
              />
              Классика
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="designPreference"
                value="Модерн"
                onChange={handleChange}
              />
              Модерн
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="designPreference"
                value="Минимализм"
                onChange={handleChange}
              />
              Минимализм
            </label>
          </div>
          <button onClick={nextStep} style={{ marginTop: '20px' }}>Далее</button>
        </div>
      )}

      {step === 5 && (
        <div>
          <h2>5. На какой бюджет рассчитываете?</h2>
          <div>
            <input
              type="range"
              name="budget"
              min="300000"
              max="10000000"
              value={formData.budget}
              step="100000"
              onChange={handleBudgetChange}
            />
            <p>Текущий бюджет: {formData.budget} тенге</p>
          </div>
          <button onClick={nextStep} style={{ marginTop: '20px' }}>Далее</button>
        </div>
      )}

      {step === 6 && (
        <div>
          <h2>6. Ваш номер телефона</h2>
          <input
            type="tel"
            name="phone"
            placeholder="Введите ваш номер"
            onChange={handleChange}
          />
          <button onClick={handleSubmit} style={{ marginTop: '20px' }}>Отправить</button>
        </div>
      )}
    </div>
  );
}

export default App;
