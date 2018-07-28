# Wooterer

DIY flower watering system. Cause I couldn't by a ready to use one...

## Installing

1. Clone this repo.
2. `git co status` (because wooterer'll push there its logs)
3. `git merge master`
4. `npm i`
6. Configure git and GitHub so wooterer is able to commit.

	1. Configure SSH key (ideally, a [deploy key](https://developer.github.com/v3/guides/managing-deploy-keys/)).
	2. Say who you are.

	```
	git config --global user.name "You"
	git config --global user.email "y@o.u"
	```

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
sudo -H -u pi bash -c "cd /home/pi/wooterer && (node index.js >> log.out 2>> log.err)" &
```
