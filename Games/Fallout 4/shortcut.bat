FOR %%G IN (C:\PROGRA~2 D: E: F:) DO IF EXIST "%%G\Steam\steamapps\common\Fallout 4\" ^
set directory="%%G\Steam\steamapps\common\Fallout 4\"
%SystemRoot%\explorer.exe %directory%
