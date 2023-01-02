 const data=[
  {"tag": "greetings",
  "patterns": ["hello Ribot","Hello ribot!","Hello, ribot.","Hello.","hello!","Hello","Hey.","hey!","Hey","Hi.","hi","Hi","good day","Good day.","Good day","Greetings","greetings","Greetings.","What's up?","what's up?","how is it going?","How is it going?"],
  "responses": ["Hello!","Hey!","What can I do for you?"]
  },
  {"tag": "Salutation",
  "patterns": ["bonjour ribot","bonjour Ribot","Bonjour, Ribot.","Bonjour.","bonjour","Bonjour","bonjour.","bonne journée","Bonne journée.","Bonne journée","Les salutations","les salutations","les salutations.","Les salutations.","Quoi de neuf?","quoi de neuf?","comment ça se passe?","Comment ça se passe?"],
  "responses": ["Bonjour!","Que puis-je faire pour vous?"]
  },
  {"tag": "nom",
  "patterns": ["Quel est ton nom?","Quel est ton nom","quel est ton nom?","Quel est ton nom","nom","Nom","Comment tu t'appelles","Comment tu t'appelles?","comment tu t'appelles?","comment tu t'appelles","qui êtes-vous","qui êtes-vous?","Qui êtes-vous","Qui êtes-vous?","Comment dois-je vous appeler","Comment dois-je vous appeler","comment dois-je vous appeler?","Comment dois-je vous appeler?"],
  "responses": ["Tu peux m'appeler Ribot","je suis Ribot","Je suis Ribot votre assistante virtuelle"]
  },
  {"tag": "name",
  "patterns": ["what's your name?","what's your name","whats your name","who r u","name","who are you?","who are you ?","how can i call you"],
  "responses": ["you can call me Ribot","I'm Ribot","i'm Ribot your virtuel assistant"]
  },
  {"tag": "how are u",
  "patterns": ["How are you?","how are u?","how are u","How are u","hru","Hru","hru?","Hru?","how are u doing?","how are u doing","How are u doing?","How are u doing","how are u doing today","how are u doing today?","How are u doing today","How are u doing today?","How are u today?","how are u today?","how are u today","How are u today","are u ok","Are u ok","are u ok?","Are u ok?"],
  "responses": ["I am fine","I'm good","i'm doing well","i'm very good","i'm very good thanks","i'm very good thank you"]
  },
  {"tag": "comment vas-tu",
  "patterns": ["Comment vas-tu","comment vas-tu?","comment vas-tu","Comment vas-tu","Comment vas-tu aujourd'hui","Comment vas-tu aujourd'hui?","comment vas-tu aujourd'hui","comment vas-tu aujourd'hui?","ça va","Ça va","Ça va?","ça va?"],
  "responses": ["je vais bien","je vais bien","je vais bien merci","je suis très bien","je vais très bien merci","je vais très bien merci beaucoup"]
  },
  {"tag": "how are u",
  "patterns": ["How are u?","how are u?","how are u","How are u","hru","Hru","hru?","Hru?","how are u doing?","how are u doing","How are u doing?","How are u doing","how are u doing today","how are u doing today?","How are u doing today","How are u doing today?","How are u today?","how are u today?","how are u today","How are u today","are u ok","Are u ok","are u ok?","Are u ok?"],
  "responses": ["I am fine","I'm good","i'm doing well","i'm very good","i'm very good thanks","i'm very good thank you"]
  },
  {"tag": "who made u",
  "patterns": ["who made you","Who made you?","Who made u?","who made u?","who made u Ribot?","Who made u Ribot?","who created you","who created you Ribot","Who created you?","Who created you Ribot?","who created you?","who created you Ribot?"],
  "responses": ["I'm made by Khoudraji Ouiam software engineers at Irisi in Science and Technicals science"]
  },
  {"tag": "qui t'a fait",
  "patterns": ["Qui t'a fait","qui t'a fait?","qui t'a fait Ribot?","Qui t'a fait Ribot?","qui t'a créé","qui t'a créé Ribot","Qui t'a créé?","Qui t'as créé Ribot?","qui t'as créé?","qui t'as créé Ribot?","Qui t'as fait","qui t'as fait?","qui t'as fait Ribot?","Qui t'as fait Ribot?","qui t'as créé","qui t'a créé Ribot","Qui t'a créé?","Qui t'as créé Ribot?","qui t'as créé?","qui t'as créé Ribot?"],
  "responses": ["Je suis créer par Khoudraji Ouiam,AlFaiz Assia,Labzioui Ikrame étudiantes ingénieurs  à l'Irisi en sciences et techniques"]
  },
  {"tag": "what can you do for me",
  "patterns": ["What can you do for me?","what can you do for me","What can you do for me Ribot?","What can you do for me Ribot?","functionality.","Functionality.","functionality","Functionality","what is the functionality that you can do for me","What is the functionality that you can do for me","what is the functionality that you can do for me?","What is the functionality that you can do for me?","how you can help me","How you can help me","how you can help me?","How you can help me?"],
  "responses": ["I can give you information about backup, i can answer you with English or french ,i can open for you a Website that you want ,i can do for you a search in google and i can give you a picture of what you asked and i can also give you a game to play it"]
  },
  {"tag": "Que peux tu faire pour moi",
  "patterns": ["Fonctionnalité.","Fonctionnalité","fonctionnalité","fonctionnalité.","Que peux tu faire pour moi?","que peux tu faire pour moi?","Que peux tu faire pour moi Ribot?","que peux tu faire pour moi Ribot?","quelle est la fonctionnalité que vous pouvez faire pour moi","Quelle est la fonctionnalité que vous pouvez faire pour moi","quelle est la fonctionnalité que vous pouvez faire pour moi?","Quelle est la fonctionnalité que vous pouvez faire pour moi?","comment pouvez-vous m'aider","Comment pouvez-vous m'aider","comment pouvez-vous m'aider?","Comment pouvez-vous m'aider?"],
  "responses": ["Je peux vous donner des informations sur la sauvegarde, je peux vous répondre en anglais ou en français, je peux ouvrir pour vous un site Web que vous voulez, je peux faire pour vous une recherche dans Google et je peux vous donner une image de ce que vous avez demandé et je peut également vous donner un jeu pour y jouer"]
  },
  {"tag": "What is the technologies used to made you",
  "patterns": ["technologies","Technologies","technologies.","Technologies.","What is the technologies used to made you?","what is the technologies used to made you?","What is the technologies used to made you Ribot?","what is the technologies used to made you Ribot?","What technologies are used to make you","what technologies are used to make you","What technologies are used to make you?","what technologies are used to make you?","What technologies are used to make you Ribot?","What technologies are used to make you Ribot","what technologies are used to make you Ribot","what technologies are used to make you Ribot?","What kind of technologies are used to create you","what kind of technologies are used to create you","What kind of technologies are used to create you?","what kind of technologies are used to create you?","What are the types of technology used?","what are the types of technology used?","What are the types of technology used","what are the types of technology used"],
  "responses": ["They used js / Css / Html ","they are used to create me js /Css "]
  },
  {"tag": "Quelles sont les technologies utilisées pour vous faire",
  "patterns": ["technologies","Technologies","technologies.","Technologies.","Quelles sont les technologies utilisées pour vous faire?","quelles sont les technologies utilisées pour vous faire?","Quelles sont les technologies utilisées pour vous faire Ribot?","quelles sont les technologies utilisées pour vous faire Ribot?","Quelles technologies sont utilisées pour vous faire","quelles technologies sont utilisées pour vous faire","Quelles technologies sont utilisées pour vous faire?","quelles technologies sont utilisées pour vous faire?","Quelles technologies sont utilisées pour vous faire Ribot?","Quelles technologies sont utilisées pour vous faire Ribot","Quelles technologies sont utilisées pour vous faire Ribot","quelles technologies sont utilisées pour vous faire Ribot?","Quel type de technologies sont utilisées pour vous créer","quel type de technologies sont utilisées pour vous créer","Quel type de technologies sont utilisées pour vous créer?","quel type de technologies sont utilisées pour vous créer?","Quels sont les types de technologies utilisées?","quels sont les types de technologies utilisées?","Quels sont les types de technologies utilisées","quels sont les types de technologies utilisées"],
  "responses": ["Ils ont utilisé javaScript Css Html ","ils sont utilisés pour me créer javaScript/Css"]
  },
 
  {"tag": "fr",
  "patterns": ["bonjour","coucou","Bonjour.","Coucou.","Bonjour","Coucou","salut"],
  "responses": ["Bonjour!tu vas bien?"]
  },

  {"tag": "au revoir",
  "patterns": ["Cya.","cya","cya.","A plus tard","A plus tard.","a plus tard","a plus tard.","au revoir","au revoir.","Au revoir","Au revoir.","Je pars maintenant","Je pars maintenant.","je pars maintenant","je pars maintenant.","Passe une bonne journée","Passe une bonne journée.","passe une bonne journée","Passe une bonne journée."],
  "responses": ["Triste de te voir partir :(","A plus tard","Au revoir"]
  },

  {"tag": "invalid",
    "patterns": [" ","gvsd","asbhk"],
    "responses": ["Sorry, can't understand you", "Please give me more info", "Not sure I understand"]
  },

  {"tag": "thanks",
    "patterns": ["Thanks.","Thanks","Thank you.","Thank you","That's helpful.","That's helpful","Awesome, thanks." ,"Awesome, thanks", "Thanks for helping me","Thanks for helping me."],
    "responses": ["Happy to help!", "Any time!", "My pleasure"]
},

{"tag": "backup",
"patterns": ["What is backup?","What is back up?","what's back up","What is back up","what is back up","Back up.","Back up","back up.","backup","what is backup","back up","What is the meaning of backup?","What is the meaning of back up?","what is the meaning of back up","What is the meaning of backup","what is the meaning of backup?","what is the definition of back up","what is the definition of backup","what is the definition of back up?","What is the definition of backup?","What's the definition of back up?"],
"responses": ["A backup is a copy of data.This copy can include important parts of the database (the control files and data files)", "A backup is a safeguard against unexpected data loss and application errors", "If you lose the original data, then you can reconstruct it by using a backup."]
},
{"tag": "sauvegarde",
"patterns": ["Qu'est-ce que la sauvegarde?","qu'est-ce que la sauvegarde?","Qu'est-ce que la sauvegarde","qu'est-ce que la sauvegarde","Sauvegarde.","Sauvegarde","sauvegarde.","sauvegarde","Quelle est la signification de la sauvegarde?","quelle est la signification de la sauvegarde?","Quelle est la signification de la sauvegarde","quelle est la signification de la sauvegarde","quelle est la définition de la sauvegarde","quelle est la définition de la sauvegarde?","Quelle est la définition de la sauvegarde","Quelle est la définition de la sauvegarde?"],
"responses": ["Une sauvegarde est une copie de données. Cette copie peut inclure des parties importantes de la base de données (les fichiers de contrôle et les fichiers de données)", "Une sauvegarde est une protection contre les pertes de données inattendues et les erreurs d'application", "Si vous perdez les données d'origine, vous pouvez les reconstruire en utilisant une sauvegarde."]
},
{"tag": "BACK UP TYPES",
"patterns": ["Back up types.","back up types.","Back up types","back up types","What are the backup types?","what are the backup types?","What are the backup types","what are the backup types"],
"responses": ["There are 3 main types of backup:Full backup, differential backup and incremental backup."]
},
{"tag": "TYPES DE SAUVEGARDE",
"patterns": ["Types de sauvegarde.","types de sauvegarde.","Types de sauvegarde","types de sauvegarde","Quels sont les types de sauvegarde?","quels sont les types de sauvegarde?","Quels sont les types de sauvegarde","quels sont les types de sauvegarde"],
"responses": ["Il existe 3 principaux types de sauvegarde : La sauvegarde informatique totale ,La sauvegarde informatique incrémentale et La sauvegarde différentielle."]
},
{"tag": "advantages of Full backup",
"patterns": ["advantages of Full backup.","Advantages of Full backup.","Advantages of Full backup","advantages of Full backup","what is the advantages of Full backup?","What is the advantages of Full backup?"],
"responses": ["This backup provides the best protection for your data. No matter what happens to your hardware, you know you ll have a complete copy of all the company information you need"]
},
{"tag": "disadvantages of Full backup",
"patterns": ["disadvantages of Full backup.","Disadvantages of Full backup.","Disadvantages of Full backup","disadvantages of Full backup","what is the disadvantages of Full backup?","What is the disadvantages of Full backup?"],
"responses": ["Because these backups replicate so much information, they require a lot of storage space, time, and financial investment to complete"]
},
{"tag": "advantages of Incremental backup",
"patterns": ["advantages of Incremental backup.","Advantages of Incremental backup.","Advantages of Incremental backup","advantages of Incremental backup","what is the advantages of Incremental backup?","What is the advantages of Incremental backup?"],
"responses": ["These backups require far less time and storage to create more compact copies of data."]
},
{"tag": "disadvantages of Incremental backup",
"patterns": ["disadvantages of Incremental backup.","Disadvantages of Incremental backup.","Disadvantages of Incremental backup","disadvantages of Incremental backup","what is the disadvantages of Incremental backup?","What is the disadvantages of Incremental backup?"],
"responses": ["The time you save in making the backup is added to the time necessary to restore the data. If you want to review the files that were backed up incrementally on Monday, you d first need to restore the full backup from Friday and move on from there."]
},
{"tag": "advantages of Differential backup",
"patterns": ["advantages of Differential backup.","Advantages of Differential backup.","Advantages of Differential backup","advantages of Differential backup","what is the advantages of Differential backup?","What is the advantages of Differential backup?"],
"responses": ["When compared to incremental backups, this form requires less time to restore and can offer you different versions of the same files."]
},
{"tag": "disadvantages of Differential backup",
"patterns": ["disadvantages of Differential backup.","Disadvantages of Differential backup.","Disadvantages of Differential backup","disadvantages of Differential backup","what is the disadvantages of Differential backup?","What is the disadvantages of Differential backup?"],
"responses": ["Because you re backing up more data, these backups can consume far more storage space over time in comparison to incremental backups."]
},
{"tag": "avantages de la sauvegarde informatique totale",
"patterns": ["avantages de la sauvegarde informatique totale.","Avantages de la sauvegarde informatique totale.","Avantages de la sauvegarde informatique totale","avantages de la sauvegarde informatique totale","quels sont les avantages de la sauvegarde informatique totale?","Quels sont les avantages de la sauvegarde informatique totale?"],
"responses": ["Cette sauvegarde offre la meilleure protection pour vos données. Peu importe ce qui arrive à votre matériel, vous savez que vous aurez une copie complète de toutes les informations sur l'entreprise dont vous avez besoin"]
},
{"tag": "inconvénients de la sauvegarde informatique totale",
"patterns": ["inconvénients de la sauvegarde informatique totale.","Inconvénients de la sauvegarde informatique totale.","Inconvénients de la sauvegarde informatique totale","inconvénients de la sauvegarde informatique totale","quels sont les inconvénients de la sauvegarde informatique totale?","Quels sont les inconvénients de la sauvegarde informatique totale?"],
"responses": ["Étant donné que ces sauvegardes répliquent une grande quantité d'informations, elles nécessitent beaucoup d'espace de stockage, de temps et d'investissements financiers."]
},
{"tag": "avantages de la sauvegarde incrémentale",
"patterns": ["avantages de la sauvegarde incrémentale.","Avantages de la sauvegarde incrémentale.","Avantages de la sauvegarde incrémentale","avantages de la sauvegarde incrémentale","quels sont les avantages de la sauvegarde incrémentale?","Quels sont les avantages de la sauvegarde incrémentale?"],
"responses": ["Ces sauvegardes nécessitent beaucoup moins de temps et de stockage pour créer des copies de données plus compactes."]
},
{"tag": "inconvénients de la sauvegarde incrémentale",
"patterns": ["inconvénients de la sauvegarde incrémentale.","Inconvénients de la sauvegarde incrémentale.","Inconvénients de la sauvegarde incrémentale","inconvénients de la sauvegarde incrémentale","quels sont les inconvénients de la sauvegarde incrémentale?","Quels sont les inconvénients de la sauvegarde incrémentale?"],
"responses": ["Le temps que vous gagnez en faisant la sauvegarde s'ajoute au temps nécessaire pour restaurer les données. Si vous souhaitez revoir les fichiers qui ont été sauvegardés de manière incrémentielle le lundi, vous devez d'abord restaurer la sauvegarde complète du vendredi et continuer à partir de là."]
},
{"tag": "avantages de la sauvegarde différentielle",
"patterns": ["avantages de la sauvegarde différentielle.","Avantages de la sauvegarde différentielle.","Avantages de la sauvegarde différentielle","avantages de la sauvegarde différentielle","quels sont les avantages de la sauvegarde différentielle?","Quels sont les avantages de la sauvegarde différentielle?"],
"responses": ["Par rapport aux sauvegardes incrémentielles, ce formulaire nécessite moins de temps de restauration et peut vous proposer différentes versions des mêmes fichiers."]
},
{"tag": "inconvénients de la sauvegarde différentielle",
"patterns": ["inconvénients de la sauvegarde différentielle.","Inconvénients de la sauvegarde différentielle.","Inconvénients de la sauvegarde différentielle","inconvénients de la sauvegarde différentielle","quels sont les inconvénients de la sauvegarde différentielle?","Quels sont les inconvénients de la sauvegarde différentielle?"],
"responses": ["Étant donné que vous sauvegardez plus de données, ces sauvegardes peuvent consommer beaucoup plus d'espace de stockage au fil du temps par rapport aux sauvegardes incrémentielles."]
},
{"tag": "types of oracle database backup",
"patterns": ["Types of oracle database backup.","types of oracle database backup.","Types of oracle database backup","types of oracle database backup","What are oracle database backup types?","what are oracle database backup types?","What are oracle database backup types","what are oracle database backup types"],
"responses": ["In the context of Oracle there are two main backup types physical backup and logical backup."]
},
{"tag": "types de sauvegarde de base de données oracle",
"patterns": ["Types de sauvegarde de base de données oracle.","types de sauvegarde de base de données oracle.","Types de sauvegarde de base de données oracle","types de sauvegarde de base de données oracle","Quels sont les types de sauvegarde de base de données Oracle?","quels sont les types de sauvegarde de base de données Oracle?","Quels sont les types de sauvegarde de base de données Oracle","quels sont les types de sauvegarde de base de données Oracle"],
"responses": ["Dans le contexte d'Oracle, il existe deux principaux types de sauvegarde, la sauvegarde physique et la sauvegarde logique."]
},
{"tag": "Physical backup",
"patterns": ["What is Physical back up?","what is Physical back up?","What is Physical back up","what is Physical back up","Physical back up.","Physical back up","physical back up.","physical back up","What is the meaning of Physical back up?","what is the meaning of Physical back up?","What is the meaning of Physical back up","what is the meaning of Physical back up","what is the definition of Physical back up","what is the definition of Physical back up?","What is the definition of Physical back up","What is the definition of Physical back up?"],
"responses": ["Physical backup is a copy of the physical files stored to use in case of an emergency. Physical backups typically include such file types as control files, data files, and archived redo logs."]
},
{"tag": "Logical backup",
"patterns": ["What is Logical back up?","what is Logical back up?","What is Logical back up","what is Logical back up","Logical back up.","Logical back up","logical back up.","logical back up","What is the meaning of Logical back up?","what is the meaning of Logical back up?","What is the meaning of Logical back up","what is the meaning of Logical back up","what is the definition of Logical back up","what is the definition of Logical back up?","What is the definition of Logical back up","What is the definition of Logical back up?"],
"responses": ["Logical backups are a copy of logical data within the database, such as stored procedures and tables. These backups are often treated as a good supplement to the physical backups but are essentially useless without their counterpart."]
},
{"tag": "Sauvegarde physique",
"patterns": ["Qu'est-ce qu'une sauvegarde physique?","qu'est-ce qu'une sauvegarde physique?","Qu'est-ce qu'une sauvegarde physique","qu'est-ce qu'une sauvegarde physique","Sauvegarde physique.","Sauvegarde physique","sauvegarde physique.","sauvegarde physique","Quelle est la signification de la sauvegarde physique?","quelle est la signification de la sauvegarde physique?","Quelle est la signification de la sauvegarde physique","quelle est la signification de la sauvegarde physique","quelle est la définition de la sauvegarde physique","quelle est la définition de la sauvegarde physique?","Quelle est la définition de la sauvegarde physique","Quelle est la définition de la sauvegarde physique?"],
"responses": ["La sauvegarde physique est une copie des fichiers physiques stockés à utiliser en cas d'urgence. Les sauvegardes physiques incluent généralement des types de fichiers tels que des fichiers de contrôle, des fichiers de données et des journaux redo archivés."]
},
{"tag": "Sauvegarde logique",
"patterns": ["Qu'est-ce qu'une sauvegarde logique?","qu'est-ce qu'une sauvegarde logique?","Qu'est-ce qu'une sauvegarde logique","qu'est-ce qu'une sauvegarde logique","Sauvegarde logique.","Sauvegarde logique","sauvegarde logique.","sauvegarde logique","Quelle est la signification de la sauvegarde logique?","quelle est la signification de la sauvegarde logique?","Quelle est la signification de la sauvegarde logique","quelle est la signification de la sauvegarde logique","quelle est la définition de la sauvegarde logique","quelle est la définition de la sauvegarde logique?","Quelle est la définition de la sauvegarde logique","Quelle est la définition de la sauvegarde logique?"],
"responses": ["Les sauvegardes logiques sont une copie des données logiques dans la base de données, telles que les procédures stockées et les tables. Ces sauvegardes sont souvent considérées comme un bon complément aux sauvegardes physiques mais sont essentiellement inutiles sans leur contrepartie."]
},
{"tag": "advantages of Physical backup",
"patterns": ["advantages of Physical backup.","Advantages of Physical backup.","Advantages of Physical backup","advantages of Physical backup","what is the advantages of Physical backup?","What is the advantages of Physical backup?"],
"responses": ["It is useful when the user needs to restore the complete database in a short period","They provide details of transactions and changes made in databases"]
},
{"tag": "disadvantages of Physical backup",
"patterns": ["disadvantages of Physical backup.","Disadvantages of Physical backup.","Disadvantages of Physical backup","disadvantages of Physical backup","what is the disadvantages of Physical backup?","What is the disadvantages of Physical backup?"],
"responses": ["This slows down database operations."]
},
{"tag": "advantages of Logical backup",
"patterns": ["advantages of Logical backup.","Advantages of Logical backup.","Advantages of Logical backup","advantages of Logical backup","what is the advantages of Logical backup?","What is the advantages of Logical backup?"],
"responses": ["This is useful when the user needs to restore the complete database to the last time","It was more complex and provides granular recovery capabilities"]
},
{"tag": "disadvantages of Logical backup",
"patterns": ["disadvantages of Logical backup.","Disadvantages of Logical backup.","Disadvantages of Logical backup","disadvantages of Logical backup","what is the disadvantages of Logical backup?","What is the disadvantages of Logical backup?"],
"responses": ["Critical for recovery of special components,less secure compared to physical backup,It only provides structural details"]
},
{"tag": "avantages de la sauvegarde physique",
"patterns": ["avantages de la sauvegarde physique.","Avantages de la sauvegarde physique.","Avantages de la sauvegarde physique","avantages de la sauvegarde physique","quels sont les avantages de la sauvegarde physique?","quels sont les avantages de la sauvegarde physique?"],
"responses": ["Il est utile lorsque l'utilisateur a besoin de restaurer la base de données complète dans un court laps de temps","Ils fournissent des détails sur les transactions et les modifications apportées aux bases de données"]
},
{"tag": "inconvénients de la sauvegarde physique",
"patterns": ["inconvénients de la sauvegarde physique.","Inconvénients de la sauvegarde physique.","Inconvénients de la sauvegarde physique","inconvénients de la sauvegarde physique","quels sont les inconvénients de la sauvegarde physique?","quels sont les inconvénients de la sauvegarde physique?"],
"responses": ["Cela ralentit les opérations de la base de données"]
},
{"tag": "avantages de la sauvegarde logique",
"patterns": ["avantages de la sauvegarde logique.","Avantages de la sauvegarde logique.","Avantages de la sauvegarde logique","avantages de la sauvegarde logique","quels sont les avantages de la sauvegarde logique?","quels sont les avantages de la sauvegarde logique?"],
"responses": ["Ceci est utile lorsque l'utilisateur doit restaurer la base de données complète à la dernière fois","Il était plus complexe et offre des capacités de récupération granulaires"]
},
{"tag": "inconvénients de la sauvegarde logique",
"patterns": ["inconvénients de la sauvegarde logique.","Inconvénients de la sauvegarde logique.","Inconvénients de la sauvegarde logique","inconvénients de la sauvegarde logique","quels sont les inconvénients de la sauvegarde logique?","quels sont les inconvénients de la sauvegarde logique?"],
"responses": ["Critique pour la récupération de composants spéciaux, moins sécurisé par rapport à la sauvegarde physique, il ne fournit que des détails structurels"]
},
{"tag": "CONTROL FILE BACKUP",
"patterns": ["What is a controle file?","What is a controle file","what is a controle file?","what is a controle file","what is mean a control file","what is mean a control file?","What is mean a control file?","What is mean a control file"],
"responses": ["A control file basicaly contains physical structure of database it include details like: OFFLINE BACKUPS,ONLINE BACKUPS"]
},
{"tag": "SAUVEGARDE DU FICHIER DE CONTRÔLE",
"patterns": ["Qu'est-ce qu'un fichier controle?","Qu'est-ce qu'un fichier controle","qu'est-ce qu'un fichier controle?","qu'est-ce qu'un fichier controle"],
"responses": ["Un fichier de contrôle contient essentiellement la structure physique de la base de données, il comprend des détails tels que : SAUVEGARDES HORS LIGNE, SAUVEGARDES EN LIGNE"]
},
{"tag": "HOW TO BACKUP CONTROL FILE?",
"patterns": ["How to backup control file?","How to backup control file","how to backup control file?","how to backup control file","How to backup the control file?","How to backup the control file","how to backup the control file?","how to backup the control file"],
"responses": ["There's two ways: Script(alter database backup control file to trace) and Binary(alter database backup control file to '<location_path>';)"]
},
{"tag": "COMMENT SAUVEGARDER LE FICHIER DE CONTRÔLE?",
"patterns": ["Comment sauvegarder le fichier de contrôle?","Comment sauvegarder le fichier de contrôle","comment sauvegarder le fichier de contrôle?","comment sauvegarder le fichier de contrôle"],
"responses": ["Il y a deux façons : Script (modifier le fichier de contrôle de sauvegarde de la base de données à tracer) et binaire (modifier le fichier de contrôle de sauvegarde de la base de données à '<location_path>';)"]
},
{"tag": "Changes in Oracle Database Release 18c, Version 18.1",
"patterns": ["what is the changes in Oracle Database Release 18c,Version 18.1","what is the changes in Oracle Database Release 18c,Version 18.1?","What is the changes in Oracle Database Release 18c,Version 18.1","What is the changes in Oracle Database Release 18c,Version 18.1?"],
"responses": ["Duplicate PDBs into an existing CDB,Duplicate databases to Oracle Cloud,Roll forward a physical standby,RMAN backups usable after migration,Shadow lost write protection"]
},
{"tag": "Changes in Oracle Database 12c Release 2(12.2.0.1)",
"patterns": ["what is the changes in Oracle Database 12c Release 2(12.2.0.1)","what is the changes in Oracle Database 12c Release 2(12.2.0.1)?","What is the changes in Oracle Database 12c Release 2(12.2.0.1)","What is the changes in Oracle Database 12c Release 2(12.2.0.1)?"],
"responses": ["Enhancements to cross-platform transport,Enhancements to database duplication,Backup and reccovery support for application containers"]
},
{"tag": "Changes in Oracle Database 12c Release 1(12.2.0.2)",
"patterns": ["what is the Changes in Oracle Database 12c Release 1(12.2.0.2)","what is the changes in Oracle Database 12c Release 1(12.2.0.2)?","What is the changes in Oracle Database 12c Release 1(12.2.0.2)","What is the Changes in Oracle Database 12c Release 1(12.2.0.2)?"],
"responses": ["Oracle Virtual Private Database (VPD) for RMAN virtual private catalog"]
},
{"tag": "Changes in Oracle Database 12c Release 1(12.2.0.1)",
"patterns": ["what is the Changes in Oracle Database 12c Release 1(12.2.0.1)","what is the changes in Oracle Database 12c Release 1(12.2.0.1)?","What is the changes in Oracle Database 12c Release 1(12.2.0.1)","What is the Changes in Oracle Database 12c Release 1(12.2.0.1)?"],
"responses": ["Support for multitenant container databases and pluggable databases,SYSBACKUP Privilege,Storage Snapshot Optimization,SQL Interface Improvements,Multisection Backup Improvements,Active Database Duplication Improvements,Recovering Tables and Table Partitions from RMAN Backups,Unified auditing and RMAN,DUPLICATE enhancements"]
},
{"tag": "Modifications apportées à Oracle Database version 18c, version 18.1",
"patterns": ["Quelles sont les modifications apportées à la version 18c de la base de données Oracle, version 18.1","quelles sont les modifications apportées à la version 18c de la base de données Oracle, version 18.1?","quelles sont les modifications apportées à la version 18c de la base de données Oracle, version 18.1","Quelles sont les modifications apportées à la version 18c de la base de données Oracle, version 18.1?"],
"responses": ["Dupliquer les PDB dans un CDB existant, Dupliquer les bases de données vers Oracle Cloud, Transférer une veille physique, Sauvegardes RMAN utilisables après la migration, Shadow a perdu la protection en écriture"]
},
{"tag": "Modifications apportées à Oracle Database 12c version 2(12.2.0.1)",
"patterns": ["quels sont les changements dans Oracle Database 12c Release 2(12.2.0.1)","quels sont les changements dans Oracle Database 12c Release 2(12.2.0.1)?","Quels sont les changements dans Oracle Database 12c Release 2(12.2.0.1)","Quels sont les changements dans Oracle Database 12c Release 2(12.2.0.1)?"],
"responses": ["Améliorations du transport multiplateforme, Améliorations de la duplication de base de données, Prise en charge de la sauvegarde et de la récupération pour les conteneurs d'applications"]
},
{"tag": "Modifications apportées à Oracle Database 12c version 1(12.2.0.2)",
"patterns": ["quels sont les changements dans Oracle Database 12c Release 1(12.2.0.2)","quels sont les changements dans Oracle Database 12c Release 1(12.2.0.2)?","Quels sont les changements dans Oracle Database 12c Release 1(12.2.0.2)","Quels sont les changements dans Oracle Database 12c Release 1(12.2.0.2)?"],
"responses": ["Oracle Virtual Private Database (VPD) pour le catalogue privé virtuel RMAN"]
},
{"tag": "Modifications apportées à Oracle Database 12c version 1(12.2.0.1)",
"patterns": ["quels sont les changements dans Oracle Database 12c Release 1(12.2.0.1)","quels sont les changements dans Oracle Database 12c Release 1(12.2.0.1)?","Quels sont les changements dans Oracle Database 12c Release 1(12.2.0.1)","Quels sont les changements dans Oracle Database 12c Release 1(12.2.0.1)?"],
"responses": ["Prise en charge des bases de données de conteneurs mutualisées et des bases de données enfichables,Privilège SYSBACKUP,Optimisation des instantanés de stockage,Améliorations de l'interface SQL,Améliorations de la sauvegarde multisection,Améliorations de la duplication de base de données active,Récupération de tables et de partitions de table à partir de sauvegardes RMAN,Audit unifié et RMAN,Améliorations DUPLICATE"]
},
{"tag": "7 Data Backup Best Practices",
"patterns": ["What are the best practices for data backup?","What are the best practices for data backup","what are the best practices for data backup?","what are the best practices for data backup?"],
"responses": ["Regular and Frequent Data Backup,Use Multiple Methods,Prioritize Offsite Storage,Perform Regular Tests,Consider Endpoints,Encrypt Backup Data,Decide on the Retention Span"]
},
{"tag": "7 meilleures pratiques de sauvegarde de données",
"patterns": ["Quelles sont les meilleures pratiques pour la sauvegarde des données?","Quelles sont les meilleures pratiques pour la sauvegarde des données","quelles sont les meilleures pratiques pour la sauvegarde des données?","quelles sont les meilleures pratiques pour la sauvegarde des données?"],
"responses": ["Sauvegarde de données régulière et fréquente,Utiliser plusieurs méthodes,Priorité au stockage hors site,Effectuer des tests réguliers,Considérer les points finaux,Crypter les données de sauvegarde,Décider de la durée de conservation"]
},


];

var img_data = [
{
    "img": ["images/basket.jpg","images/basket-ball3.webp","images/bask2.jpeg"],
    "id": ["basket","basket-ball","basket ball"]
},
{
  "img": ["images/248.png"],
  "id": ["logo"]

},
{
    "img": ["images/book.jpg"],
    "id": ["book","livre","cahier"]

},
{
    "img": ["images/brain-lateral.png"],
    "id": ["brain","cerveau"]
},
{
    "img": ["images/cat.png","images/Cat3.jpg","images/kitty2.jpeg"],
    "id": ["cat","chat","chatte","kitty"]
},
{
  "img": ["images/dog.jpg","images/dog2.jpg","images/dog3.jpg","images/luga.jpeg"],
  "id": ["dog","chien","chienne","doggy"]
},
{
    "img": ["images/Family.jpg","images/family2.jpg"],
    "id": ["family","famille"]
},
{
    "img": ["images/football.jpg","images/foot2.jpeg","images/foot3.jpg"],
    "id": ["football","foot-ball","foot ball"]
},
{
    "img": ["images/friends.jpg"],
    "id": ["friends","amis"]
},
{
    "img": ["images/human.png"],
    "id": ["human","homme","humain"]
},
{
    "img": ["images/nature.jpg","images/nature2.jpg","images/nature3.jpeg"],
    "id": ["nature","natural view","naturel","naturelle"]
}, 
{
  "img": ["images/ordinateur.png","images/ordinateur2.jpg","images/Ordinateur4.webp"],
  "id": ["ordinateur","pc","computer", "pc portable"]
}, 
{
  "img": ["images/robot.jpg","images/robot2.png","images/robot3.webp"],
  "id": ["robot"]
}, 
{
  "img": ["images/stars.webp","images/star1.jpg","images/star2.jpg"],
  "id": ["stars","etoile","star","etoiles"]
}, 
{
  "img": ["images/stylo.jpg","images/Stylo2.jpg","images/stylo3.jpg"],
  "id": ["stylo","stylos","pen","pens"]
},
];
const dataGame=[  {
  "patterns": ["let's play", "can we play", "play", "game", "i wanna play","i wanna play again","replay","i want to play again","games"],
  "responses": ["We could play a song game, i'll give you a part of  popular songs, and you have to give me the name  of the song! If you got three right answers of five you win."],
},
{
"patterns": ["je veux jouer","peut tu jouer un jeux ","jeux","jeu"],
"responses": ["On pourrait jouer à un jeu de song, je vais te donner une partie de chansons populaires, et tu dois me donner le nom  de la chanson ! Si tu as trois bonnes réponses sur cinq, tu gagnes."]
}];
const startGame=[{"patterns": ["ok","okay", "I'm in!", "start", "let's start","okay"]}];
const nextGame=[{"patterns": ["next", "continue", "suivant", "next one"]}];
