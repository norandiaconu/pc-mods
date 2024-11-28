FOR %%G IN (C:\PROGRA~2 D: E: F:) DO IF EXIST "%%G\Steam\steamapps\common\Alice Madness Returns\AliceGame\Config\" ^
set directory="%%G\Steam\steamapps\common\Alice Madness Returns\AliceGame\Config\"
%SystemRoot%\explorer.exe %directory%
set directory="%UserProfile%\Documents\My Games\Alice Madness Returns\AliceGame\Config"
%SystemRoot%\explorer.exe %directory%
