function validate_group(theForm)
{

  if (!theForm.UserGroup.value)
  {
    alert("Пожалуйста, введите значение для поля \"Имя группы\".");
    theForm.UserGroup.focus();
    return (false);
  }
  if (theForm.UserGroup.value.length > 32) {
    alert("Ограничение на длину строки \"Имя группы\" равно 32 символам.");
    theForm.UserGroup.focus();
	theForm.UserGroup.select();
    return (false);
  }

  var prev;
  if(theForm.UserGroupPrev)	{
	  prev = theForm.UserGroupPrev.value;
  } else	{
	  prev = '';
  }

  // First check the group does not exist already
  if( prev == theForm.UserGroup.value )	{
	
  } else if( checkGroup("abook.php?func=checkgroup&GroupName=" + theForm.UserGroup.value) )	{
	alert('The selected group name already exists - Please specify a new group');
    theForm.UserGroup.focus();
	theForm.UserGroup.select();
	return (false);
  }

  var checkOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.";
  var checkStr = theForm.UserGroup.value;
  var allValid = true;
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
  }
  if (!allValid)
  {
    alert("Пожалуйста, используйте только буквы, цифры и символы \".-_\" в поле \"Название Группы\".");
    theForm.UserGroup.focus();
    return (false);
  }
 

  return (true);
}

function SubmitGroup()	{

// Loop through and select all emails in the Group box
if(validate_group(document.MainForm))	{
len=document.MainForm.ToAddress.options.length 

for (i=0;i<len;i++){
document.MainForm.ToAddress.options[i].selected=true;
}


if(!len)	{

    alert("Выбрать Группы и Пользователей");
    document.MainForm.ToAddress.focus();
    return (false);
}

document.MainForm.submit();
}


}