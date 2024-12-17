export class DictonaryService {

    constructor() {
        this.words = {
            "abundancia": "Cantidad grande o copiosa de algo.",
            "agradable": "Que produce satisfacción o complacencia.",
            "alegría": "Sentimiento de satisfacción, gozo o contento.",
            "bello": "Que tiene belleza.",
            "cantidad": "Proporción o cantidad de algo.",
            "decisión": "Acto de tomar una determinación.",
            "educación": "Proceso de enseñanza y aprendizaje.",
            "emoción": "Estado afectivo intenso que se manifiesta con una serie de cambios fisiológicos, psicológicos y conductuales."
          };
    }

    findWord(word) {
        return this.words[word.toLowerCase().trim()] ?? null;
    }

}