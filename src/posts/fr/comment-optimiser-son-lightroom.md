---
title: Comment optimiser son lightroom
cover: /images/comment-optimiser-son-lightroom/cover.jpg
date: 2015-12-25
layout: post.pug
collection: posts
---

Aaaaaaaaaaaaah la photo. Ça faisait un moment que j'avais délaissé cette activité, à mon plus grand regret. Mais il n'est pas toujours évident de faire de la photo régulièrement lorsqu'on a seulement un reflex assez encombrant et un appareil photo sur son smartphone de moyenne qualité.

J'ai cependant repéré quelques compacts experts comme [le Sony G5 X](http://www.tomsguide.fr/actualite/canon-powershot-g5-x,48779.html), [le Fujifilm X-T1](http://www.lesnumeriques.com/appareil-photo-numerique/fujifilm-x-t1-p19220/test.html), [Panasonic Lumix LX100](http://www.lesnumeriques.com/appareil-photo-numerique/panasonic-lumix-lx100-p21696/test.html) et [Ricoh GR II](http://www.lesnumeriques.com/appareil-photo-numerique/ricoh-gr-ii-p26987/test.html) mais j'attends avant toute chose de m'acheter prochainement un nouveau smartphone avec un meilleur capteur afin de voir si un compact a encore une nécessité à mes yeux.

Tout ça pour dire que j'ai repris la photo et pour retoucher mes photos j'utilise [Lightroom](http://www.adobe.com/products/photoshop-lightroom.html) (nommé LR par la suite).

![](/images/comment-optimiser-son-lightroom/lightroom.png)

Bien. Néanmoins je me suis confronté à un énorme problème : l'édition sur LR est devenue pour une raison que j'ignore extrêmement lente, au point que je ne peux même plus modifier quoique ce soit sans que ça prenne des heures.

Plusieurs hypothèses à ceci :

- disque dur en fin de vie ou mal optimisé ?
- fichiers CR2 trop gourmand ?
- mise à jour de LR 5 en 6 ?
- pas assez de RAM ?

On oublie direct le problème de RAM, j'ai 6go (certes peu ces derniers temps mais suffisant) et mon moniteur d'activité n'indique nullement une saturation de la RAM.

Passons à LR en lui-même. Après quelques essais entre les versions 5 et 6 (patches compris), rien à signaler même si plus les versions de LR s'incrémentent et plus le logiciel a tendance à être lent. C'est le chic de chez Adobe. Ils rajoutent des fonctionnalités sans corriger les bugs et leurs apps deviennent de vraies usines à gaz. Je ne les remercie pas d'avoir tué Fireworks au passage.

Quid des fichiers au [format CR2](https://fr.wikipedia.org/wiki/RAW_%28format_d'image%29) ? De l'ordre de 25mo contrairement à mes JPG qui sont moins importants, on peut se poser la question. Un fichier plus imposant est forcément plus difficile à échanger et donc peut amener à des lenteurs lors de son édition. J'avoue avoir eu tendance à souvent photographier en JPG pendant un moment, du coup n'ayant jamais vraiment édité un format CR2, cela pouvait être ça. Mais pourtant, lorsque je fais une copie de quelques CR2 vers un autre disque dur, aucun souci, la vitesse de transfert est plutôt accrue.

Bon, dernière hypothèse : le disque dur en fin de vie ou mal optimisé. Après de nombreux tests SMART, checkdisk, défragmentation, aucune différence. J'en ai même profité pour passer celui-ci de USB vers **eSata qui est [une connectique bien plus rapide](https://en.wikipedia.org/wiki/List_of_device_bit_rates#Peripheral)**. Je l'avais déjà mis une fois en FireWire 800 mais j'avais constamment des fichiers corrompus lorsque j'échangeais via cette connectique. Mauvais câble ? Je ne sais pas, c'est un LaCie, plutôt bonne marque. Bref, j'ai remarqué que j'avais un câble eSata dans mes rangements, j'en ai profité pour lui mettre ceci, que je vous recommande. 👍

Après tous ces tests, je commence vraiment à me dire que le disque dur est presque H.S., même si les tests prouvaient le contraire.

Et puis je me suis rappelé que j'avais mis [mon catalogue LR](https://helpx.adobe.com/fr/lightroom/help/lightroom-catalog-basics.html) (là où toutes vos préférences photos sont enregistrées) au même endroit que mes photos. Et généralement, un disque dur qui fait à la fois lecture et écriture en même temps n'aime pas trop ça, surtout un disque dur externe en RAID 1 (mirroring). Procédé à proscrire.

Me voilà alors parti dans l'idée de déplacer mon catalogue LR (de ~140mo pour le moment, soit trois fois rien) sur un disque dur interne et de laisser toutes mes photos sur mon disque dur externe. Constatation ? L'utilisation de LR est maintenant totalement fluide, je n'ai plus le moindre problème d'import et de manipulation de photo.

Soulagé !

Si je devais résumer, **ne jamais mettre son catalogue LR et ses photos sur le même disque dur et encore moins son catalogue sur un disque dur à distance**. (Sauf éventuellement si vous avez un SSD, et encore). D'ailleurs, un mec explique [comment il a organisé ses fichiers photos et catalogue](http://www.duncanfawkes.com/using-lightroom-nas/) de manière plutôt intéressante.

Je vous recommande aussi vivement de mettre au moins 20go de cache CameraRaw pour LR 6.x car il semblerait que cela permet à LR de vraiment le booster. Astuce indiquée sur [le site de petapixel](http://petapixel.com/2015/10/28/lightroom-slow-try-setting-a-huge-cache-size/).

Je vous donne au passage deux articles afin d'améliorer encore plus votre Lightroom :

- [10 Tips to Improve Lightroom’s Speed and Performance Without Additional Hardware](http://digital-photography-school.com/10-tips-to-improve-lightrooms-speed-and-performance-without-additional-hardware/)
- [3 Ways to Speed Up Importing Photos Into Lightroom](http://lightroomtricks.com/lightroom-tips-ways-speed-importing-images)

Et si vous désirez voir mes photos, elles sont disponibles sur [500px](http://500px.kud.io/).

À plus tard. 😺

<img style="width: 50%; margin: auto; margin-top: 150px;" src="http://i.giphy.com/Gma7Nu5lWOAQE.gif">
