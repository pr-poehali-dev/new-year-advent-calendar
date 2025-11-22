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

  const ornamentEmojis = ['🔴', '🔵', '🟡', '🟢', '🟣', '🟠'];
  const getRandomOrnament = () => ornamentEmojis[Math.floor(Math.random() * ornamentEmojis.length)];

  return (
    <div className="min-h-screen relative overflow-hidden bg-festive">
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background/95" />
      
      <div className="snowflake" style={{ left: '5%', animationDuration: '10s', animationDelay: '0s' }}>❅</div>
      <div className="snowflake" style={{ left: '15%', animationDuration: '12s', animationDelay: '2s' }}>❆</div>
      <div className="snowflake" style={{ left: '25%', animationDuration: '15s', animationDelay: '4s' }}>❅</div>
      <div className="snowflake" style={{ left: '35%', animationDuration: '11s', animationDelay: '1s' }}>❆</div>
      <div className="snowflake" style={{ left: '45%', animationDuration: '13s', animationDelay: '3s' }}>❅</div>
      <div className="snowflake" style={{ left: '55%', animationDuration: '14s', animationDelay: '5s' }}>❆</div>
      <div className="snowflake" style={{ left: '65%', animationDuration: '12s', animationDelay: '2s' }}>❅</div>
      <div className="snowflake" style={{ left: '75%', animationDuration: '16s', animationDelay: '6s' }}>❆</div>
      <div className="snowflake" style={{ left: '85%', animationDuration: '11s', animationDelay: '1s' }}>❅</div>
      <div className="snowflake" style={{ left: '95%', animationDuration: '13s', animationDelay: '3s' }}>❆</div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="text-center mb-8 animate-fade-in relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-8xl santa-float">
            🎅
          </div>
          
          <div className="mt-16 mb-6 flex justify-center items-center gap-4 flex-wrap">
            <span className="text-6xl tinsel-wave">🎄</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
              Новогодний Адвент
            </h1>
            <span className="text-6xl tinsel-wave" style={{ animationDelay: '1s' }}>🎄</span>
          </div>
          
          <div className="flex justify-center gap-2 mb-4 text-3xl">
            <span className="tinsel-wave">✨</span>
            <span className="tinsel-wave" style={{ animationDelay: '0.2s' }}>⭐</span>
            <span className="tinsel-wave" style={{ animationDelay: '0.4s' }}>✨</span>
            <span className="tinsel-wave" style={{ animationDelay: '0.6s' }}>⭐</span>
            <span className="tinsel-wave" style={{ animationDelay: '0.8s' }}>✨</span>
          </div>
          
          <p className="text-2xl text-accent font-semibold drop-shadow-lg">
            31 день волшебных заданий до Нового года
          </p>
        </header>

        <Tabs defaultValue="calendar" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-card/90 backdrop-blur-md border-2 border-accent/30 shadow-2xl">
            <TabsTrigger value="calendar" className="flex items-center gap-2 text-base">
              <Icon name="Calendar" size={20} />
              <span>Календарь</span>
            </TabsTrigger>
            <TabsTrigger value="forum" className="flex items-center gap-2 text-base">
              <Icon name="MessageSquare" size={20} />
              <span>Форум</span>
            </TabsTrigger>
            <TabsTrigger value="rules" className="flex items-center gap-2 text-base">
              <Icon name="BookOpen" size={20} />
              <span>Правила</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calendar" className="animate-slide-up">
            <div className="mb-6 text-center">
              <Card className="bg-card/90 backdrop-blur-md border-2 border-primary shadow-2xl inline-block tree-border">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="text-5xl">🎁</div>
                  <div className="text-left">
                    <p className="text-lg font-semibold">Выполнено заданий:</p>
                    <p className="text-3xl font-bold text-accent">{openedDays.size} / 31</p>
                  </div>
                  <div className="text-5xl">🎁</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                const isUnlocked = day <= currentDate;
                const isOpened = openedDays.has(day);
                
                return (
                  <div key={day} className="relative">
                    {day % 3 === 0 && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-2xl ornament-swing">
                        {getRandomOrnament()}
                      </div>
                    )}
                    <Card
                      className={`
                        relative overflow-hidden cursor-pointer transition-all duration-300 
                        ${isUnlocked ? 'hover:scale-110 hover:shadow-2xl hover:z-10' : 'opacity-60 cursor-not-allowed'}
                        ${isOpened ? 'bg-primary/30 border-primary border-4 glow-effect' : 'bg-card/90 backdrop-blur-md border-2 border-accent/40'}
                      `}
                      onClick={() => handleDayClick(day)}
                    >
                      <CardContent className="p-4 text-center relative min-h-[100px] flex flex-col items-center justify-center">
                        {!isUnlocked && (
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm rounded-lg z-10">
                            <Icon name="Lock" size={28} className="text-muted-foreground" />
                          </div>
                        )}
                        <div className={`text-3xl font-bold mb-1 ${isOpened ? 'text-accent' : 'text-foreground'}`}>
                          {day}
                        </div>
                        {isOpened && (
                          <div className="flex flex-col items-center">
                            <Icon name="CheckCircle2" size={20} className="text-accent twinkle mb-1" />
                            <span className="text-xs text-accent font-semibold">Готово!</span>
                          </div>
                        )}
                        {isUnlocked && !isOpened && (
                          <div className="text-3xl">🎁</div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 text-4xl">
                <span className="tinsel-wave">🎄</span>
                <span className="tinsel-wave" style={{ animationDelay: '0.3s' }}>⛄</span>
                <span className="tinsel-wave" style={{ animationDelay: '0.6s' }}>🎅</span>
                <span className="tinsel-wave" style={{ animationDelay: '0.9s' }}>🦌</span>
                <span className="tinsel-wave" style={{ animationDelay: '1.2s' }}>🎁</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="forum" className="animate-slide-up">
            <Card className="bg-card/90 backdrop-blur-md border-2 border-accent/40 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Icon name="MessageSquare" size={28} />
                  Форум заданий
                  <span className="text-3xl">💬</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-lg">
                  Здесь вы можете обсуждать задания, делиться своими достижениями и помогать другим участникам!
                </p>
                <div className="space-y-4">
                  <Card className="bg-muted/60 backdrop-blur-sm border-2 border-primary/30">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          А
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-bold text-lg">Анна</p>
                            <span className="text-xl">🎄</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">2 часа назад</p>
                          <p className="text-base">Выполнила задание дня 5! Печенье получилось восхитительным! 🍪✨</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/60 backdrop-blur-sm border-2 border-accent/30">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-xl shadow-lg">
                          М
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-bold text-lg">Михаил</p>
                            <span className="text-xl">⛄</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">5 часов назад</p>
                          <p className="text-base">Кто-нибудь уже делал задание дня 10? Поделитесь впечатлениями! ❄️</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/60 backdrop-blur-sm border-2 border-primary/30">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xl shadow-lg">
                          Е
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-bold text-lg">Елена</p>
                            <span className="text-xl">🎅</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">1 день назад</p>
                          <p className="text-base">Слепила снеговика с детьми! Такое удовольствие! ⛄❄️🎄</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-6 text-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">
                    <Icon name="Plus" size={20} className="mr-2" />
                    Добавить сообщение
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rules" className="animate-slide-up">
            <Card className="bg-card/90 backdrop-blur-md border-2 border-accent/40 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Icon name="BookOpen" size={28} />
                  Правила участия
                  <span className="text-3xl">📜</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg text-lg">
                      1
                    </div>
                    <p className="text-lg pt-1">Каждый день открывается новое задание — выполняйте их по порядку! 📅</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg text-lg">
                      2
                    </div>
                    <p className="text-lg pt-1">Делитесь своими результатами в форуме и вдохновляйте других участников! 💬</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg text-lg">
                      3
                    </div>
                    <p className="text-lg pt-1">Выполните минимум 20 заданий, чтобы претендовать на главный приз! 🏆</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg text-lg">
                      4
                    </div>
                    <p className="text-lg pt-1">Будьте доброжелательны и поддерживайте других участников! ❤️</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg text-lg">
                      5
                    </div>
                    <p className="text-lg pt-1">Наслаждайтесь процессом и создавайте праздничное настроение! 🎉✨</p>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-primary/20 rounded-lg border-2 border-primary text-center">
                  <p className="text-2xl font-bold mb-2">🎄 С Новым годом! 🎄</p>
                  <p className="text-lg">Пусть каждое задание приносит радость и волшебство!</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={selectedDay !== null} onOpenChange={() => setSelectedDay(null)}>
        <DialogContent className="bg-card/95 backdrop-blur-md border-4 border-accent shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl flex items-center justify-center gap-3">
              <span className="text-4xl twinkle">🎁</span>
              <span>День {selectedDay}</span>
              <span className="text-4xl twinkle">🎁</span>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="bg-primary/30 p-8 rounded-xl border-4 border-primary/60 shadow-lg relative overflow-hidden">
              <div className="absolute top-2 right-2 text-3xl ornament-swing">⭐</div>
              <div className="absolute bottom-2 left-2 text-3xl ornament-swing" style={{ animationDelay: '1s' }}>✨</div>
              <p className="text-xl font-semibold text-center relative z-10">
                {selectedDay && tasks[selectedDay as keyof typeof tasks]}
              </p>
            </div>
            <div className="flex gap-4">
              <Button 
                className="flex-1 bg-primary hover:bg-primary/90 text-lg py-6 shadow-lg"
                onClick={() => {
                  setOpenedDays(prev => new Set(prev).add(selectedDay!));
                  setSelectedDay(null);
                }}
              >
                <Icon name="CheckCircle2" size={22} className="mr-2" />
                Выполнено!
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 text-lg py-6 border-2"
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
