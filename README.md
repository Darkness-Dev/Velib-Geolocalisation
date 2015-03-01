# Velib-Geolocalisation
Velib Geolocalisation est une WebApp permettant de localiser le plus proche velib de paris à partir de sa position actuelle.

Documentation du projet Firefox OS : Géolocalisation Vélib de paris

Google Maps Javascript API V3 :
L’API Maps permet d’afficher des cartes made in Google sur notre application web, et de la personnaliser selon nos envies.
Cette API nous permet de marquer les positions des vélos vélib et tracer un itinéraire qui va permettre d’aller à la station vélo la plus proche de sa position actuelle.
Prérequis
Premièrement, vous devez avoir accès à l’API de Google Maps. Il vous faudra pour cela:
•	Un compte Google
•	Une clef d’accès à l’API
La première étape est toute simple, il vous suffit de posséder un compte Google et s’y connecter. Pour ceux qui n’en auraient pas, vous pouvez vous inscrire sur la page de comptes de Google.
Ensuite, il vous faudra vous rendre sur la Console D’API de Google, il s’agit d’un site qui propose un service d’abonnement aux API de Google, gratuit ou payant selon l’utilisation que vous en faites. Vous devrez ensuite vous rendre dans la partie “Services” et chercher le service “Google Maps API V3” et le cocher. Acceptez ensuite aveuglément les conditions d’utilisation.
 
Licence ouverte (Open Data)  de JCDecaux Developer :
Une licence ouverte est une donnée numérique d'origine publique ou privée. Elle peut être notamment produite par une collectivité, un service public (éventuellement délégué) ou une entreprise. Elle est diffusée de manière structurée selon une méthodologie et une licence ouverte garantissant son libre accès et sa réutilisation par tous, sans restriction technique, juridique ou financière. Ref : http://fr.wikipedia.org/wiki/Donn%C3%A9es_ouvertes
Pour commencer :
On a deux types de données qui sont fournies par la licence ouverte de  ‘vélos en libre-service’ :
•	Les données statiques fournissent des informations peu changeantes comme leur position GPS, le nombre de bornettes, la présence d’un terminal de paiement, etc.
•	Les données dynamiques indiquent l’état d’une station, le nombre de vélos disponibles, le nombre d’emplacements libre, etc.
On a utilisé les données dynamiques parce qu’elles englobe tout les caractéristiques des données statique. En plus, on sait en temps réel l’état de la station. 
Les données dynamiques sont rafraichies toutes les minutes et ne sont accessibles que depuis l’API contrairement aux données statiques qui sont accessibles directement par simple téléchargement de fichier.
Utilisation de l’API
Pour utiliser l’api et accéder aux données, il faut obtenir une clé API.
Clé API
Pour obtenir une clé, il faut créer un  compte (gratuitement) et demander une clé sur la page de gestion de votre compte.
Comment utiliser votre clé
Une fois que vous disposez de votre clé, il suffit de l’ajouter comme paramètre nommé « apiKey » à l’ensemble de vos requêtes à l’API dynamique.
GET https://api.jcdecaux.com/vls/v1/stations?contract={contract_name}&apiKey={api_key}
Pour notre cas, on a remplacé le  contract_name par ‘paris’ qui est la ville qui nous intéresse, on peut éventuellement entrer d’autres villes qui ont des vélos vélib.
Si aucune clé n'est spécifiée, vous obtiendrez alors une réponse avec le statut 403 Forbidden.
Format des données
Les résultats sont au format JSON et encodés en UTF-8.
