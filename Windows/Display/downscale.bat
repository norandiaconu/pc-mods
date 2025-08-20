@ECHO OFF

powershell -windowstyle hidden "(Get-AudioDevice -list | Where-Object Name -like ('H*') | Set-AudioDevice).Name; "^
    "Set-DisplayScale -DisplayId 1 125; "^
    "Set-DisplayRefreshRate -DisplayId 1 -RefreshRate 143.988;"

EXIT