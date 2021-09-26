const { WAConnection } = require('@adiwajshing/baileys');
const fs = requerir('fs');

función asincrónica  iniciar () { 
 const client = nuevo WAConnection()

 cliente. registrador. nivel = 'advertir'

 cliente. on('qr', () = > {
        })

 fs. existsSync('./Samu330.json') && client. loadAuthInfo('./Samu330.json')

 cliente. on('conectando', () = > {
 consola. log('Conectando')
        })

 cliente. on('abierto', () = > {
 consola. log('Conectado exitosamente :D')
        })
 a la espera del cliente. connect({timeoutMs: 30*1000})
 fs. writeFileSync('./Samu330.json', JSON. stringify(cliente. base64EncodedAuthInfo(), null, '\t'))
        }

iniciar ()
. catch (err = > consola. log("error inesperado:
