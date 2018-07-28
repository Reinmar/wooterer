# Wooterer

DIY flower watering system. Cause I couldn't by a ready to use one...

## Installing

1. Clone this repo.
2. `git co status` (because wooterer'll push there its logs)
3. `git merge master`
4. `npm i`
5. Start me!

## Starting via SSH

```
ssh pi@raspberrypi.local
```

```
nohup node index.js >> log.out 2>> log.err < /dev/null &
```

## Starting automatically

Add the following line before `exit 0` in `etc/rc.local`:

```
node /home/pi/wooterer/index.js >> /home/pi/wooterer/log.out 2>> /home/pi/wooterer/log.err &
```
