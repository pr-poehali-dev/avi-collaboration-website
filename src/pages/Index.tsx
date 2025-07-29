import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-blue to-brand-pink rounded-full animate-gradient"></div>
              <span className="text-xl font-bold text-brand-dark">AVI digital & pr agency</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-brand-dark hover:text-brand-blue transition-colors">Услуги</a>
              <a href="#about" className="text-brand-dark hover:text-brand-blue transition-colors">О нас</a>
              <a href="#contact" className="text-brand-dark hover:text-brand-blue transition-colors">Контакты</a>
              <Button className="bg-gradient-to-r from-brand-blue to-brand-pink text-white hover:shadow-lg transition-all duration-300">
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-brand-dark mb-6 leading-tight">
              Комплексный подход к
              <span className="bg-gradient-to-r from-brand-blue to-brand-pink bg-clip-text text-transparent">
                {" "}управлению брендом
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Мы объединяем инновационные цифровые решения и качественную PR-поддержку 
              для развития вашего бизнеса в современной цифровой среде
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-brand-blue to-brand-pink text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Icon name="Rocket" className="mr-2" />
                Начать проект
              </Button>
              <Button size="lg" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300">
                <Icon name="Play" className="mr-2" />
                Смотреть презентацию
              </Button>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="relative mt-16">
            <div className="absolute top-10 left-10 w-16 h-16 bg-brand-blue/20 rounded-full animate-float"></div>
            <div className="absolute top-20 right-16 w-12 h-12 bg-brand-pink/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-10 left-1/4 w-8 h-8 bg-success-green/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Наши ключевые компетенции</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Широкий спектр профессиональных услуг диджитал-маркетинга и PR-стратегии
            </p>
          </div>

          {/* Digital Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-brand-dark mb-8 text-center">🛠️ Цифровые технологии</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "Code",
                  title: "Веб-разработка",
                  description: "Создание современных и удобных сайтов любого формата: лендинги, корпоративные ресурсы, интернет-магазины"
                },
                {
                  icon: "FileText",
                  title: "Контент-маркетинг",
                  description: "Профессиональная подготовка качественного контента всех форматов с SEO-оптимизацией"
                },
                {
                  icon: "Share2",
                  title: "SMM продвижение",
                  description: "Полноценное сопровождение аккаунтов в ведущих социальных платформах с креативным подходом"
                },
                {
                  icon: "TrendingUp",
                  title: "Интернет-реклама",
                  description: "Настройка рекламных кампаний в Яндекс.Директ, Google Ads и социальных сетях"
                },
                {
                  icon: "Mail",
                  title: "Email-маркетинг",
                  description: "Персонализация рассылок и аналитический подход к оценке результатов"
                },
                {
                  icon: "Search",
                  title: "SEO-продвижение",
                  description: "Комплексная оптимизация для повышения позиций в поисковых системах"
                }
              ].map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/60 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-pink rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon name={service.icon} className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-brand-dark group-hover:text-brand-blue transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* PR Services */}
          <div>
            <h3 className="text-2xl font-bold text-brand-dark mb-8 text-center">💡 PR-решения</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "Target",
                  title: "Стратегическое консультирование",
                  description: "Определение идеологии и миссии бренда, создание уникальных месседжей"
                },
                {
                  icon: "Newspaper",
                  title: "Работа со СМИ",
                  description: "Пресс-конференции, публикации в авторитетных источниках"
                },
                {
                  icon: "Shield",
                  title: "Кризис-менеджмент",
                  description: "Быстрая реакция на негативные отзывы и минимизация рисков"
                },
                {
                  icon: "Users",
                  title: "Event-менеджмент",
                  description: "Организация корпоративных ивентов и деловых конференций"
                },
                {
                  icon: "Globe",
                  title: "Онлайн-активность",
                  description: "Интеграция в онлайн-сообщества, работа с блогерами"
                },
                {
                  icon: "BarChart",
                  title: "Исследования",
                  description: "Изучение общественного мнения и рыночной конъюнктуры"
                },
                {
                  icon: "Building",
                  title: "GR и лоббизм",
                  description: "Взаимодействие с органами власти и профсообществами"
                },
                {
                  icon: "Heart",
                  title: "Внутренний PR",
                  description: "Улучшение внутрикорпоративных коммуникаций"
                }
              ].map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white/80 to-pink-50/50 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-pink to-brand-blue rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Icon name={service.icon} className="text-white" size={20} />
                    </div>
                    <CardTitle className="text-sm text-brand-dark group-hover:text-brand-pink transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs text-gray-600 text-center">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gradient-to-r from-brand-blue/5 to-brand-pink/5">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-brand-dark mb-6">
                Почему выбирают 
                <span className="bg-gradient-to-r from-brand-blue to-brand-pink bg-clip-text text-transparent">
                  {" "}AVI agency?
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Наш опыт позволяет уверенно утверждать, что ключ к успешному развитию лежит в сочетании 
                инновационных цифровых решений и качественной PR-поддержки.
              </p>
              <div className="space-y-4">
                {[
                  "Комплексный подход к управлению брендом",
                  "Команда экспертов в digital и PR",
                  "Современные инструменты аналитики",
                  "Индивидуальная стратегия для каждого клиента"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-success-green rounded-full flex items-center justify-center">
                      <Icon name="Check" className="text-white" size={16} />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-blue to-brand-pink rounded-3xl p-8 text-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4">Надежный инструмент роста</h3>
                <p className="text-blue-100 mb-6">
                  Получите мощный бренд и достигните успеха в динамичной цифровой экономике
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">100+</div>
                    <div className="text-blue-200 text-sm">Проектов</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">5+</div>
                    <div className="text-blue-200 text-sm">Лет опыта</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">
              Готовы обсудить ваш проект? Напишите нам!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-brand-dark">Отправить сообщение</CardTitle>
                <CardDescription>Мы ответим в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя" className="border-gray-200 focus:border-brand-blue" />
                  <Input placeholder="Email" type="email" className="border-gray-200 focus:border-brand-blue" />
                </div>
                <Input placeholder="Тема сообщения" className="border-gray-200 focus:border-brand-blue" />
                <Textarea 
                  placeholder="Расскажите о вашем проекте..." 
                  rows={4}
                  className="border-gray-200 focus:border-brand-blue"
                />
                <Button className="w-full bg-gradient-to-r from-brand-blue to-brand-pink text-white hover:shadow-lg transition-all duration-300">
                  <Icon name="Send" className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  {[
                    { icon: "Mail", title: "Email", value: "hello@aviagency.ru" },
                    { icon: "Phone", title: "Телефон", value: "+7 (495) 123-45-67" },
                    { icon: "MapPin", title: "Адрес", value: "Москва, ул. Примерная, 123" },
                    { icon: "Clock", title: "Режим работы", value: "Пн-Пт: 9:00-18:00" }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-r from-brand-blue to-brand-pink rounded-full flex items-center justify-center">
                        <Icon name={contact.icon} className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-brand-dark">{contact.title}</div>
                        <div className="text-gray-600">{contact.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-blue/10 to-brand-pink/10 rounded-2xl p-6">
                <h4 className="font-bold text-brand-dark mb-4">Социальные сети</h4>
                <div className="flex space-x-4">
                  {['Instagram', 'Linkedin', 'Twitter', 'Youtube'].map((social, index) => (
                    <div key={index} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                      <Icon name={social} size={20} className="text-brand-blue" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-blue to-brand-pink rounded-full animate-gradient"></div>
              <span className="text-xl font-bold">AVI digital & pr agency</span>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Надежный инструмент роста вашего бизнеса, поддержки репутации и укрепления рыночных позиций
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h5 className="font-bold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Веб-разработка</li>
                <li>Digital маркетинг</li>
                <li>PR-консалтинг</li>
                <li>SMM продвижение</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Компания</h5>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Команда</li>
                <li>Карьера</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Контакты</h5>
              <ul className="space-y-2 text-gray-400">
                <li>hello@aviagency.ru</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center text-gray-400 border-t border-gray-700 pt-8">
            <p>&copy; 2024 AVI digital & pr agency. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;