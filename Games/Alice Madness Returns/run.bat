FOR %%G IN (C:\PROGRA~2 "D:" "E:" "F:") DO IF EXIST "%%G\Steam\steamapps\common\Alice Madness Returns\AliceGame\Config\" ^
set directory="%%G\Steam\steamapps\common\Alice Madness Returns\AliceGame\Config\"
xcopy .\DefaultEngine.ini %directory% /y
set directory="%UserProfile%\Documents\My Games\Alice Madness Returns\AliceGame\Config"
xcopy .\AliceEngine.ini %directory% /y
pause
