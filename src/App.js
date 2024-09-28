import React, { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    furnitureType: '',
    installationTime: '',
    designPreference: '',
    budget: '',
    name: '',
    phone: '',
  });

  // Обработка изменения поля
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Обработка следующего шага
  const nextStep = () => {
    setStep(step + 1);
  };

  // Обработка отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Здесь ты можешь добавить логику для отправки данных на сервер
    alert('Спасибо! Ваши данные отправлены.');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Опрос по корпусной мебели</h1>
      {step === 1 && (
        <div>
          <h2>1. Какой тип мебели вас интересует?</h2>
          <select name="furnitureType" onChange={handleChange}>
            <option value="">Выберите...</option>
            <option value="Кухонная мебель">Кухонная мебель</option>
            <option value="Гардеробная мебель">Гардеробная мебель</option>
            <option value="Офисная мебель">Офисная мебель</option>
            <option value="Спальная мебель">Спальная мебель</option>
          </select>
          <button onClick={nextStep} style={{ marginTop: '20px' }}>Далее</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>2. Когда планируете установить?</h2>
          <select name="installationTime" onChange={handleChange}>
            <option value="">Выберите...</option>
            <option value="В течение недели">В течение недели</option>
            <option value="В течение месяца">В течение месяца</option>
            <option value="Позже">Позже</option>
          </select>
          <button onClick={nextStep} style={{ marginTop: '20px' }}>Далее</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>3. Какой дизайн вас интересует?</h2>
          <input
            type="text"
            name="designPreference"
            placeholder="Введите стиль (классика, модерн, минимализм)"
            onChange={handleChange}
          />
          <button onClick={nextStep} style={{ marginTop: '20px' }}>Далее</button>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2>4. На какой бюджет рассчитываете?</h2>
          <input
            type="text"
            name="budget"
            placeholder="Например, 300,000 - 500,000 тенге"
            onChange={handleChange}
          />
          <button onClick={nextStep} style={{ marginTop: '20px' }}>Далее</button>
        </div>
      )}

      {step === 5 && (
        <div>
          <h2>5. Как вас зовут?</h2>
          <input
            type="text"
            name="name"
            placeholder="Введите ваше имя"
            onChange={handleChange}
          />
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
