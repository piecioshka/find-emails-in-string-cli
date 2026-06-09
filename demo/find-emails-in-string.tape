Output demo/find-emails-in-string.gif

Require find-emails-in-string

Set Shell "bash"
Set Framerate 60
Set FontSize 12
Set Width 800
Set Height 400
Set Padding 20
Set Margin 5
Set MarginFill "#212830"
Set BorderRadius 10

Hide
Type 'cd /tmp/find-emails-in-string-demo && clear' Enter
Show

Type "cat emails.txt" Sleep 200ms Enter
Wait Sleep 1200ms

Enter Enter Type "# extract all email addresses from a text file" Sleep 200ms Enter Enter
Wait Sleep 800ms

Type "find-emails-in-string emails.txt" Sleep 500ms Enter
Wait Sleep 2000ms

Sleep 3s
