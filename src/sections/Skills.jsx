import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const skills = [
  { name: 'n8n Automation', level: '90%' },
  { name: 'React.js', level: '90%' },
  { name: 'NLP & LLMs', level: '85%' },
  { name: 'Langchain', level: '80%' },
  { name: 'Transformers (Hugging Face / OpenAI)', level: '85%' },
  { name: 'JavaScript', level: '90%' },
  { name: 'Visualization (Power BI / Chart.js)', level: '90%' },
  { name: 'Next.js', level: '80%' },
  { name: 'FastAPI', level: '85%' },
  { name: 'Python', level: '87%' },
  { name: 'Node.js', level: '85%' },

];

const Skills = () => {
  const data = {
    labels: skills.map((skill) => skill.name),
    datasets: [
      {
        label: 'Proficiency Level',
        data: skills.map((skill) => parseInt(skill.level.replace('%', ''))),
        backgroundColor: 'rgba(112, 58, 192, 0.2)',
        borderColor: 'rgba(112, 58, 192, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(112, 58, 192, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(112, 58, 192, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          color: document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
        },
        grid: {
          color: document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
        },
        pointLabels: {
          color: document.documentElement.classList.contains('dark') ? '#FFF' : '#000',
          font: {
            size: 12,
          },
        },
        ticks: {
          color: document.documentElement.classList.contains('dark') ? '#FFF' : '#000',
          backdropColor: 'transparent',
          stepSize: 20
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <section id="skills" className="section-container bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Technical Proficiency
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Frontend-focused full stack development and automation expertise.
          </p>
        </div>

        <div className="mt-12 relative h-96 md:h-[500px] flex justify-center items-center">
          <Radar data={data} options={options} />
        </div>

      </div>
    </section>
  );
};

export default Skills;
