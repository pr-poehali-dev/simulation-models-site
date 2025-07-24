import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      title: "Дискретно-событийное моделирование",
      description: "Создание моделей сложных систем с анализом очередей, процессов обслуживания и логистических потоков",
      icon: "Activity",
      features: ["Анализ производственных процессов", "Оптимизация логистики", "Моделирование систем массового обслуживания"]
    },
    {
      title: "Агентное моделирование",
      description: "Разработка многоагентных систем для исследования поведения сложных адаптивных систем",
      icon: "Users",
      features: ["Социальные сети и поведение", "Финансовые рынки", "Эпидемиологические модели"]
    },
    {
      title: "Системная динамика",
      description: "Построение моделей для анализа причинно-следственных связей в сложных системах",
      icon: "TrendingUp",
      features: ["Бизнес-процессы", "Экологические системы", "Стратегическое планирование"]
    }
  ];

  const portfolio = [
    {
      title: "Оптимизация производственной линии",
      client: "Крупный машиностроительный завод",
      description: "Разработали имитационную модель производственной линии с 15 рабочими станциями",
      results: ["Увеличение производительности на 23%", "Снижение простоев на 35%", "Экономия 2.4 млн руб/год"],
      technology: "AnyLogic",
      duration: "3 месяца",
      image: "/img/fb432906-7113-4b67-b1bd-e18c5f8f46ee.jpg"
    },
    {
      title: "Модель распространения эпидемии",
      client: "Министерство здравоохранения",
      description: "Создали агентную модель для прогнозирования распространения инфекционных заболеваний",
      results: ["Точность прогноза 89%", "Оптимизация карантинных мер", "Снижение затрат на 15%"],
      technology: "NetLogo",
      duration: "4 месяца",
      image: "/img/ead04333-8f03-461a-a3d9-42cc68620c70.jpg"
    },
    {
      title: "Логистическая сеть поставок",
      client: "Федеральная торговая сеть",
      description: "Построили модель оптимизации сети распределительных центров и маршрутов доставки",
      results: ["Сокращение логистических затрат на 18%", "Улучшение времени доставки на 25%", "ROI проекта 340%"],
      technology: "Anylogic + Python",
      duration: "5 месяцев",
      image: "/img/527ad9f1-e0eb-4f4e-a81e-099cbb242283.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="BarChart3" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">SimuModel</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-300 hover:text-blue-400 transition-colors">Главная</a>
              <a href="#services" className="text-slate-300 hover:text-blue-400 transition-colors">Услуги</a>
              <a href="#portfolio" className="text-slate-300 hover:text-blue-400 transition-colors">Портфолио</a>
              <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30">
                Научное моделирование нового уровня
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Имитационные модели для
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> прорывных решений</span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Создаем высокоточные имитационные модели сложных систем. Помогаем принимать обоснованные решения 
                на основе математического моделирования и анализа данных.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Обсудить проект
                </Button>
                <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 px-8 py-3">
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть демо
                </Button>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                <img 
                  src="/img/527ad9f1-e0eb-4f4e-a81e-099cbb242283.jpg" 
                  alt="Visualization of simulation modeling results"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-slate-700 text-slate-300">Наши услуги</Badge>
            <h3 className="text-4xl font-bold text-white mb-4">Экспертиза в моделировании</h3>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Предоставляем полный спектр услуг по созданию и внедрению имитационных моделей
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-800/80 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-blue-400" />
                  </div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-slate-400 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <Icon name="CheckCircle" size={16} className="text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-500/30">Портфолио</Badge>
            <h3 className="text-4xl font-bold text-white mb-4">Успешные кейсы</h3>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Проекты, которые принесли измеримые результаты нашим клиентам
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="bg-slate-800/80 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300">
                      {project.technology}
                    </Badge>
                    <span className="text-sm text-slate-400">{project.duration}</span>
                  </div>
                  <CardTitle className="text-white text-xl mb-2">{project.title}</CardTitle>
                  <p className="text-sm text-slate-400 mb-2">{project.client}</p>
                  <CardDescription className="text-slate-300 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-white">Достигнутые результаты:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start text-sm text-slate-300">
                          <Icon name="TrendingUp" size={14} className="text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-slate-700 text-slate-300">Контакты</Badge>
              <h3 className="text-4xl font-bold text-white mb-4">Обсудим ваш проект</h3>
              <p className="text-xl text-slate-400">
                Свяжитесь с нами для консультации по вашей задаче моделирования
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Отправить запрос</CardTitle>
                  <CardDescription className="text-slate-400">
                    Расскажите о вашей задаче, и мы предложим решение
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Компания/Организация" 
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Опишите вашу задачу моделирования..." 
                      rows={4}
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить запрос
                  </Button>
                </CardContent>
              </Card>
              
              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="bg-slate-800/80 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                        <Icon name="Mail" size={24} className="text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Email</h4>
                        <p className="text-slate-400">info@simumodel.ru</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-800/80 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                        <Icon name="Phone" size={24} className="text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Телефон</h4>
                        <p className="text-slate-400">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-800/80 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                        <Icon name="MapPin" size={24} className="text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Офис</h4>
                        <p className="text-slate-400">Москва, Инновационный центр Сколково</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-lg border border-blue-500/30">
                  <h4 className="text-white font-semibold mb-2">Бесплатная консультация</h4>
                  <p className="text-slate-300 text-sm">
                    Первичная консультация по вашей задаче моделирования — бесплатно. 
                    Обсудим возможности, подходы и предварительную оценку проекта.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="BarChart3" size={20} className="text-white" />
              </div>
              <span className="text-white font-semibold">SimuModel</span>
            </div>
            <p className="text-slate-400 text-sm">
              © 2024 SimuModel. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;