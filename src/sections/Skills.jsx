import React, { useEffect, useState, useMemo } from 'react';
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
import { useThemeMode } from '../theme/ThemeContext';

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
  const { mode } = useThemeMode();
  const isDarkMode = mode === 'dark';
  
  const chartData = useMemo(() => ({
    labels: skills.map((skill) => skill.name),
    datasets: [
      {
        label: 'Proficiency Level',
        data: skills.map((skill) => parseInt(skill.level.replace('%', ''))),
        backgroundColor: 'rgba(112, 58, 192, 0.2)',
        borderColor: 'rgba(112, 58, 192, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(112, 58, 192, 1)',
        pointBorderColor: isDarkMode ? '#1f2937' : '#fff',
        pointHoverBackgroundColor: isDarkMode ? '#1f2937' : '#fff',
        pointHoverBorderColor: 'rgba(112, 58, 192, 1)',
      },
    ],
  }), [isDarkMode]);

  const chartOptions = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
        },
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
        },
        pointLabels: {
          color: isDarkMode ? '#E5E7EB' : '#1F2937',
          font: {
            size: 12,
            weight: '500',
          },
        },
        ticks: {
          display: true,
          color: isDarkMode ? '#E5E7EB' : '#1F2937',
          backdropColor: isDarkMode ? '#1F2937' : '#F9FAFB',
          stepSize: 20,
          font: {
            weight: '500',
          },
        },
        min: 0,
        max: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        titleColor: isDarkMode ? '#E5E7EB' : '#1F2937',
        bodyColor: isDarkMode ? '#E5E7EB' : '#1F2937',
        backgroundColor: isDarkMode ? '#374151' : '#FFFFFF',
        borderColor: isDarkMode ? '#4B5563' : '#E5E7EB',
        borderWidth: 1,
        padding: 10,
        displayColors: false,
      },
    },
  }), [isDarkMode]);

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
          <Radar data={chartData} options={chartOptions} />
        </div>

      </div>
    </section>
  );
};

export default Skills;
