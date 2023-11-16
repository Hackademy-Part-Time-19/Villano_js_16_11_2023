
let conto_corrente= 2000;
let operazione;

while(operazione!='chiudi'){
    operazione=(prompt("inserisci\n\n(bonifico) per effettuare un bonifico\n\n(prelievo) per effettuare un prelievo\n\n(saldo) per controllare il saldo\n\n(chiudi) per chiudere l'operazione ")).toString().toLowerCase().trim();
    let importo;
    let importo_operazione;
    switch (operazione) {

        case 'bonifico' :
        importo=parseInt(prompt("inserisci l'importo dell'operazione:"));
        if (conto_corrente-importo>=0) {
            let iban=prompt("inserisci IBAN destinatario:");
            importo_operazione= conto_corrente-importo
            conto_corrente=importo_operazione
            alert("operazione verso "+iban+" andata a buon fine")
            alert("il tuo saldo attuale è: "+conto_corrente)

        } else {
            alert("credito insufficiente")

        }

        break;
        case 'prelievo' :
        importo=parseInt(prompt("inserisci l'importo dell'operazione:"));
        if (conto_corrente-importo>=0) {
            importo_operazione= conto_corrente-importo
            conto_corrente=importo_operazione
            alert("operazione andata a buon fine")
            alert("il tuo saldo attuale è: "+conto_corrente)

        } else {
            alert("credito insufficiente")

        }

        break;
        case 'saldo' :
            alert("il tuo saldo attuale è: "+conto_corrente)

        break;
        case 'chiudi' :
            operazione='chiudi'

        break;

        default:
            alert("comando non riconosciuto")
        break;
    }

}