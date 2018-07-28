# Wooterer

DIY flower watering system. Cause I couldn't by a ready to use one...

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
