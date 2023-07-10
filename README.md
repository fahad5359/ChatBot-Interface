<small>DevLog</small>

<small><small>**كيف تم عمل نظام الكتابة**</small></small>:
الهدف هو اخذ ما تم كتابته من قبل المستخدم ووضعه على الشاشة امامه.
1) انشاء عنصر خاص الرسائل المدخلة من قبل المستخدم.
2) تعريف متغيرين داخل هذا العنصر  `message`, `displayTextAsChat` 
3) مشاركة هذه المتغيرات الى العنصر الرئيسي `mega-cont.component` عن طريق استخدا ال `Input@` 
```Ts
// Child TS Component
@Input() message:string;
@Input() displayTextAsChat:string[]=[];

```

```HTML
<!--Child Component-->
{{message}}
```

 - تم نعريف المتغير الثاني ك مصفوفة لأنه سوف يتم عرضه على صفحة المستخدم بستخدام `ngFor*`

 4) عند مناداة وسم العنصر ك ابن (داخل عنصر اخر), نقوم بإضافة المتغيرات المراد ربطها داخل الوسم:
```HTML
<!--parent Component-->
<!-- HTML File -->
<app-childComponent [message]="parentMessage" [displayTextAsChat]="perantDisplayTextAsChat"></app-childComponent>
```
- ما معنى القوس المربع `[]` ؟  يستخدم القوس المربع لربط العناصر ببعضها البعض, واستطاعة استخدامها في اي ملف من ملفات العنصر. ك عرضها في صفحة ال `HTML` و التحكم بقيمها عن طريق ال`TypeScript file`

5) تعريف المتغير اللذي تم ربطه مع المتغير الابن في ملف ال `TypeScript file` داخل العنصر الاساسي 
```TS
// parent Component
// TS File
parentMessage:string="! هلا"
perantDisplayTextAsChat:string[]=[]
```

![[Pasted image 20230614110004.png]]
- من هنا نستطيع بالتحكم بقيمة المتغير المتواجد داخل العنصر الابن عن طريق المتغير المتواجد داخل العنصر الاساسي. بربطها ببعضها البعض.

### طريقة تشغيل الواجهة
1) نسخ المشروع الى جهازك الشخصي
2) التوجه داخل المشروع
3) كتابة الامر المعطى لتشغيل تطبيق  `Angular`
``` shell
#1
git clone git@github.com:fahad5359/ChatBot-Interface.git 

#2
cd ChatBot-Interface

#3
ng serve
```
	

### FlexBox Class hierarchy
```
megaXL (DS)
├─ mega (DS)
│  ├─ sideBar
│  ├─ interactipnArea (DS)
│  │  ├─ chat (DS)
│  │  ├─ inputt (DS)
│  │  │  ├─ textInput
│  │  │  ├─ moreButtonsEtc


(DS) = Display flex
```
