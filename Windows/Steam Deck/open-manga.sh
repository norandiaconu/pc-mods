#!/bin/sh
xrandr --output eDP --rotate inverted &
exec ./Tachidesk/jre/bin/java -jar ./Tachidesk/Tachidesk-Server.jar
