from pygame import *
from random import *

screen = display.set_mode((200, 200))

r = 206
g = 211
b = 220

screen.fill((r, g, b))

for i in range(randint(80, 160)):
    x = randint(0, 199)
    draw.line(screen, (r + randint(-25, 25), g + randint(-25, 25), b + (randint(-25, 25))),
              (x, 0), (0, x))
    draw.line(screen, (r + randint(-25, 25), g + randint(-25, 25), b + (randint(-25, 25))),
              (x, 199), (199, x))

image.save(screen, "simple.png")

running = True
while running:
    for e in event.get():
        if e.type == QUIT:
            running = False

    

    display.flip()
quit()
    
