import React, { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    furnitureType: [],
    installationTime: '',
    designPreference: '',
    budget: '',
    name: '',
    phone: '',
  });

  // Обработка выбора нескольких вариантов
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

  // Обработка обычного ввода
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Переход на следующий вопрос только при заполнении текущего
  const nextStep = () => {
    if ((step === 1 && formData.furnitureType.length === 0) ||
        (step === 2 && !formData.installationTime) ||
        (step === 3 && !formData.designPreference) ||
        (step === 4 && !formData.budget) ||
        (step === 5 && !formData.name) ||
        (step === 6 && !formData.phone)) {
      alert('Пожалуйста, ответьте на текущий вопрос перед переходом!');
      return;
    }
    setStep(step + 1);
  };

  // Обработка отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Спасибо! Ваши данные отправлены.');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Опрос по корпусной мебели</h1>
      {step === 1 && (
        <div>
          <h2>1. Какой тип мебели вас интересует?</h2>
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
            <br />
            <label>
              <input
                type="checkbox"
                name="furnitureType"
                value="Офисная мебель"
                onChange={handleCheckboxChange}
              />
              Офисная мебель
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="furnitureType"
                value="Спальная мебель"
                onChange={handleCheckboxChange}
              />
              Спальная мебель
            </label>
          </div>
          <button onClick={nextStep} style={{ marginTop: '20px' }}>Далее</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>2. Когда планируете установить?</h2>
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

      {step === 3 && (
        <div>
          <h2>3. Какой дизайн вас интересует?</h2>
          <input
            type="text"
            name="designPreference"
            placeholder="Введите стиль (например, классика, модерн)"
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
