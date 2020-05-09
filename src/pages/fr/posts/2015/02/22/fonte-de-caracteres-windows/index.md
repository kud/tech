export const meta = {
  title: "La bonne fonte de caractères sous Windows",
  cover: "/images/fonte-de-caracteres-windows/cover.jpg",
}

Je ne sais pas si c'est votre cas mais j'ai l'habitude de passer de Mac OS X à Windows et vice-versa. Le problème, c'est que le rendu des fontes n'est pas du tout le même, et j'avoue qu'Apple a fait / fait un travail énorme sur ça. Du coup, quand je reviens sur Windows, c'est assez insupportable à lire. Pour cela, j'ai tenté de résoudre ce problème à coup de logiciels, de fontes "safe" et autres. Je suis finalement tombé sur un compromis qui me permet maintenant de lire les textes sans avoir un mal de crâne pas possible (rassurez-vous, ce n'est qu'une image).

Pour ça, vous allez avoir besoin de deux choses :

- Un logiciel optimisant le rendu
- Une police agréable

Je vous invite au passage à lire [la différence entre police et fonte](http://fr.wikipedia.org/wiki/Fonte_de_caract%C3%A8res).

Commençons par le logiciel.

## MacType

[MacType](https://code.google.com/p/mactype/) est un logiciel open-source qui n'est malheureusement plus vraiment maintenu mais qui à le mérite d'exister et de marcher.

Ce logiciel va tout simplement prendre la main sur le rendu du texte sous Windows et utiliser son propre moteur de rendu.

En somme, vous n'avez rien besoin de faire, il s'occupe de tout.

Voici un test avec et sans :

[![](/images/fonte-de-caracteres-windows/mactype-off.jpg)](/images/fonte-de-caracteres-windows/mactype-off.jpg)

_Sans MacType._

[![](/images/fonte-de-caracteres-windows/mactype-on.jpg)](/images/fonte-de-caracteres-windows/mactype-on.jpg)

_Avec MacType._

[![](/images/fonte-de-caracteres-windows/mactype-off-vs-on.jpg)](/images/fonte-de-caracteres-windows/mactype-off-vs-on.jpg)

_Le battle._

Il est possible que vous préfériez la version _sans_ car plus "nette" surtout quand on n'a pas l'habitude d'être sur Mac mais je préfère clairement la version MacType bien plus douce, un peu plus grasse, et anticrénelée.

Le profil choisi ici est `XMac\XMac.LCD.Default`. En fonction du profil, l'anticrénelage est plus moins accentué. De plus, vous pouvez créer votre propre profil pour être sûr(e) d'avoir le parfait rendu.

J'aurais très bien pu utiliser [Microsoft ClearType](http://www.microsoft.com/en-us/Typography/ClearTypeInfo.aspx) (chose que j'ai faite, d'ailleurs) mais le rendu est clairement inférieur à celui de [MacType](https://code.google.com/p/mactype/). Mais vraiment.

En parlant de MacType, vous avez plusieurs façons de le lancer : soit en systray, soit via le registre, ou autre.

La différence joue sur le fait qu'en systray, vous pouvez à tout moment l'activer ou non, choisir quelle application l'utilise ou non (oui, certaines apps n'aiment pas trop MacType mais elles sont rares). Alors que via le registre, cela ne peut se faire à chaud. Il faut en effet redémarrer l'application voire l'ordinateur. Un poil contraignant.

Cependant, en utilisant la version registre, vous aurez le rendu d'emblée dès que vous lancez une application alors qu'en mode systray, vous avez un préchauffage de quelques secondes pour passer du rendu classique au rendu MacType, ce que je trouve assez désagréable. Vous avez même le cas où certaines applications ne sont gérées par MacType que quand vous passez la souris sur le texte ou que vous sélectionnez le texte. Je trouve cela pénible, d'où mode Registre.

En somme, ce logiciel est devenu primordial pour moi.

Passons à la police de caractère.

## Une police agréable pour un texte agréable

Je passe beaucoup de temps à analyser quelle police me sied le plus étant donné que je suis développeur. Et en tant que développeur, je passe mon temps à écrire et lire du texte. Pour cela, il me faut forcément une police mono(space). Une police mono est une police dont les caractères sont tous la même largeur. Cela permet d'avoir un code bien droit, bien régulier, ce qui est très important.

Ceci étant, nous parlons ici de polices classiques, de polices à lire régulièrement sans pour autant être développeur.

J'ai découvert il y a peu (en cherchant justement une police pour développer) la police [Ubuntu](http://font.ubuntu.com/). L'avantage de celle-ci ? Elle est "safe" sur tous les OS (c'est à dire qu'elle rend correctement bien sur Mac OS X, Linux, BSD, Windows, etc). De plus, elle est libre et gratuite, ce qui n'est pas anondin dans le monde des polices. Et enfin, elle est autant disponible en mono, qu'en light, ou normale, ce qui la rend utilisable dans n'importe quel cas.

Je vous propose alors d'aller dans les options de Windows pour l'appliquer sur votre OS.

- Clic droit sur le bureau
- "Personalize"
- "Window Color"
- "Advanced appearance settings"
- et là, mettez "ubuntu light" partout

Je vous conseille d'ailleurs de mettre la taile de la fonte à `10` là où vous avez `9` par défaut. Cela aura un meilleur rendu. Et sur la "title bar", laisse plutôt "Segoe UI" qui rend mieux.

Avec ça, vous devriez avoir un bon rendu de fonte.

[![](/images/fonte-de-caracteres-windows/windows.jpg)](/images/fonte-de-caracteres-windows/windows.jpg)

## Tips

Si vous utilisez Firefox, il est possible que MacType ne fonctionne pas/plus. Pour résoudre ce problème, je vous propose de mettre `gfx.direct2d.disabled` à `true`. Le rendu MacType devrait revenir.

Bonne lecture !
