import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [openedDays, setOpenedDays] = useState<Set<number>>(new Set());
  const currentDate = new Date().getDate();

  const tasks = {
    1: 'Напишите новогоднее пожелание себе на год',
    2: 'Сделайте 20 приседаний под новогоднюю музыку',
    3: 'Позвоните другу и поздравьте с наступающим',
    4: 'Украсьте рабочее место гирляндой',
    5: 'Испеките праздничное печенье',
    6: 'Посмотрите новогодний фильм',
    7: 'Составьте список целей на новый год',
    8: 'Сделайте доброе дело для незнакомца',
    9: 'Научитесь заворачивать подарки красиво',
    10: 'Прогуляйтесь по зимнему парку',
    11: 'Напишите благодарственное письмо близкому',
    12: 'Сделайте горячий шоколад по новому рецепту',
    13: 'Украсьте ёлку новой игрушкой',
    14: 'Спойте новогоднюю песню караоке',
    15: 'Сделайте зимнюю фотосессию',
    16: 'Приготовьте праздничный ужин',
    17: 'Посмотрите на звёзды 10 минут',
    18: 'Напишите письмо Деду Морозу',
    19: 'Сделайте снежного ангела',
    20: 'Устройте вечер настольных игр',
    21: 'Подарите комплимент каждому члену семьи',
    22: 'Слепите снеговика',
    23: 'Устройте марафон новогодних мультфильмов',
    24: 'Приготовьте глинтвейн',
    25: 'Проведите день без гаджетов с семьёй',
    26: 'Сделайте кормушку для птиц',
    27: 'Научитесь новому танцу',
    28: 'Устройте фотосессию с подарками',
    29: 'Напишите план на первую неделю года',
    30: 'Устройте домашний спа-день',
    31: 'Встретьте Новый год с любимыми!'
  };

  const handleDayClick = (day: number) => {
    if (day <= currentDate) {
      setSelectedDay(day);
      setOpenedDays(prev => new Set(prev).add(day));
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="snowflake" style={{ left: '10%', animationDuration: '10s', animationDelay: '0s' }}>❅</div>
      <div className="snowflake" style={{ left: '20%', animationDuration: '12s', animationDelay: '2s' }}>❆</div>
      <div className="snowflake" style={{ left: '30%', animationDuration: '15s', animationDelay: '4s' }}>❅</div>
      <div className="snowflake" style={{ left: '40%', animationDuration: '11s', animationDelay: '1s' }}>❆</div>
      <div className="snowflake" style={{ left: '50%', animationDuration: '13s', animationDelay: '3s' }}>❅</div>
      <div className="snowflake" style={{ left: '60%', animationDuration: '14s', animationDelay: '5s' }}>❆</div>
      <div className="snowflake" style={{ left: '70%', animationDuration: '12s', animationDelay: '2s' }}>❅</div>
      <div className="snowflake" style={{ left: '80%', animationDuration: '16s', animationDelay: '6s' }}>❆</div>
      <div className="snowflake" style={{ left: '90%', animationDuration: '11s', animationDelay: '1s' }}>❅</div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
            🎄 Новогодний Адвент-Календарь
          </h1>
          <p className="text-xl text-accent">31 день волшебных заданий до Нового года</p>
        </header>

        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8 bg-card/80 backdrop-blur-sm">
            <TabsTrigger value="home" className="flex items-center gap-2">
              <Icon name="Home" size={16} />
              <span className="hidden sm:inline">Главная</span>
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center gap-2">
              <Icon name="Calendar" size={16} />
              <span className="hidden sm:inline">Календарь</span>
            </TabsTrigger>
            <TabsTrigger value="forum" className="flex items-center gap-2">
              <Icon name="MessageSquare" size={16} />
              <span className="hidden sm:inline">Форум</span>
            </TabsTrigger>
            <TabsTrigger value="rules" className="flex items-center gap-2">
              <Icon name="BookOpen" size={16} />
              <span className="hidden sm:inline">Правила</span>
            </TabsTrigger>
            <TabsTrigger value="participants" className="flex items-center gap-2">
              <Icon name="Users" size={16} />
              <span className="hidden sm:inline">Участники</span>
            </TabsTrigger>
            <TabsTrigger value="prizes" className="flex items-center gap-2">
              <Icon name="Trophy" size={16} />
              <span className="hidden sm:inline">Призы</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="animate-slide-up">
            <Card className="bg-card/80 backdrop-blur-sm border-2 border-accent/50">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Icon name="Sparkles" size={32} className="text-accent twinkle" />
                  Добро пожаловать в новогоднее приключение!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <p>
                  Каждый день декабря — это новое задание, которое поможет вам погрузиться в атмосферу праздника 
                  и подготовиться к встрече Нового года!
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="bg-primary/20 border-primary glow-effect">
                    <CardContent className="pt-6 text-center">
                      <div className="text-4xl mb-2">🎁</div>
                      <h3 className="font-semibold mb-2">31 задание</h3>
                      <p className="text-sm">На каждый день декабря</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/20 border-primary glow-effect">
                    <CardContent className="pt-6 text-center">
                      <div className="text-4xl mb-2">🏆</div>
                      <h3 className="font-semibold mb-2">Призы</h3>
                      <p className="text-sm">За выполнение заданий</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/20 border-primary glow-effect">
                    <CardContent className="pt-6 text-center">
                      <div className="text-4xl mb-2">👥</div>
                      <h3 className="font-semibold mb-2">Сообщество</h3>
                      <p className="text-sm">Делитесь результатами</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="text-center">
                  <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
                    Перейти к календарю
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar" className="animate-slide-up">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                const isUnlocked = day <= currentDate;
                const isOpened = openedDays.has(day);
                
                return (
                  <Card
                    key={day}
                    className={`
                      relative overflow-hidden cursor-pointer transition-all duration-300 
                      ${isUnlocked ? 'hover:scale-105 hover:shadow-2xl' : 'opacity-50 cursor-not-allowed'}
                      ${isOpened ? 'bg-primary/20 border-primary' : 'bg-card/80 backdrop-blur-sm'}
                      border-2
                    `}
                    onClick={() => handleDayClick(day)}
                  >
                    <CardContent className="p-6 text-center relative">
                      {!isUnlocked && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm rounded-lg">
                          <Icon name="Lock" size={32} className="text-muted-foreground" />
                        </div>
                      )}
                      <div className={`text-4xl font-bold mb-2 ${isOpened ? 'text-accent' : 'text-foreground'}`}>
                        {day}
                      </div>
                      {isOpened && (
                        <Icon name="CheckCircle2" size={24} className="text-accent mx-auto twinkle" />
                      )}
                      {isUnlocked && !isOpened && (
                        <div className="text-2xl">🎁</div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="forum" className="animate-slide-up">
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MessageSquare" size={24} />
                  Форум заданий
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Здесь вы можете обсуждать задания, делиться своими достижениями и помогать другим участникам!
                </p>
                <div className="space-y-4">
                  <Card className="bg-muted/50">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                          А
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold">Анна</p>
                          <p className="text-sm text-muted-foreground">2 часа назад</p>
                          <p className="mt-2">Выполнила задание дня 5! Печенье получилось восхитительным! 🍪</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/50">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">
                          М
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold">Михаил</p>
                          <p className="text-sm text-muted-foreground">5 часов назад</p>
                          <p className="mt-2">Кто-нибудь уже делал задание дня 10? Поделитесь впечатлениями!</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rules" className="animate-slide-up">
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BookOpen" size={24} />
                  Правила участия
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                      1
                    </div>
                    <p>Каждый день открывается новое задание — выполняйте их по порядку!</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                      2
                    </div>
                    <p>Делитесь своими результатами в форуме и вдохновляйте других участников.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                      3
                    </div>
                    <p>Выполните минимум 20 заданий, чтобы претендовать на главный приз!</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                      4
                    </div>
                    <p>Будьте доброжелательны и поддерживайте других участников.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                      5
                    </div>
                    <p>Наслаждайтесь процессом и создавайте праздничное настроение!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="participants" className="animate-slide-up">
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Users" size={24} />
                  Участники
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {['Анна', 'Михаил', 'Елена', 'Дмитрий', 'Ольга', 'Александр'].map((name, index) => (
                    <Card key={name} className="bg-muted/50">
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                          {name[0]}
                        </div>
                        <div>
                          <p className="font-semibold">{name}</p>
                          <p className="text-sm text-muted-foreground">
                            {Math.floor(Math.random() * 20 + 5)} заданий выполнено
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prizes" className="animate-slide-up">
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Trophy" size={24} className="text-accent" />
                  Призы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Card className="bg-gradient-to-r from-accent/20 to-primary/20 border-accent">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="text-6xl">🥇</div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2">Главный приз</h3>
                          <p>Новогодний подарочный набор для тех, кто выполнит все 31 задание!</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="text-5xl">🥈</div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">За 20+ заданий</h3>
                          <p>Праздничный сертификат и сладкий подарок</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="text-5xl">🥉</div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">За активность</h3>
                          <p>Специальные призы за самые творческие выполнения заданий</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={selectedDay !== null} onOpenChange={() => setSelectedDay(null)}>
        <DialogContent className="bg-card border-2 border-accent">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Icon name="Gift" size={28} className="text-accent twinkle" />
              День {selectedDay}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-primary/20 p-6 rounded-lg border-2 border-primary/50">
              <p className="text-lg font-medium">{selectedDay && tasks[selectedDay as keyof typeof tasks]}</p>
            </div>
            <div className="flex gap-3">
              <Button 
                className="flex-1 bg-primary hover:bg-primary/90"
                onClick={() => {
                  setOpenedDays(prev => new Set(prev).add(selectedDay!));
                  setSelectedDay(null);
                }}
              >
                <Icon name="CheckCircle2" size={18} className="mr-2" />
                Выполнено!
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setSelectedDay(null)}
              >
                Закрыть
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
