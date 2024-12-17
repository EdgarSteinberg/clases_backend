import { Router } from 'express';
import { DictonaryService } from '../services/dictonaryService.js';

const dictonaryServices = new DictonaryService();
const router = Router();

router.param('word', async (req, res, next, word) => {
    const searchWord = dictonaryServices.findWord(word);

    req.word = null;
    if(searchWord) {
        req.word = searchWord;
    }

    next();
});

router.get('/:word([a-z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)', async(req, res) => {
    const {word} = req.params;
    const definition = req.word;
    res.send({ word, definition })
});

router.get('/:word([a-z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)/:language([a-z][a-z])', async(req, res) => {
    res.send({
        definition: req.word
    })
});

router.put('/:word([a-z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)', async(req, res)=>{

});

router.delete('/:word([a-z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)', async(req, res)=>{

});

router.get('*', (req,res) => {
    res.status(400).send({
        error: 'Cannot get the specified word'
    });
});

export default router;

/*
/:word([a-z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+): Este regex coincide con una palabra en la URL. Permite solo letras minúsculas del alfabeto latino básico y caracteres acentuados comunes, como á, é, í, ó, ú, ü. La parte ([a-z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+) significa que se espera al menos una de estas letras en la URL.
/:word([a-z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)/:language([a-z][a-z]): Este regex coincide con una palabra seguida de un código de idioma en la URL. La parte ([a-z][a-z]) significa que se espera un código de idioma de dos letras después de la palabra.
/:word([a-z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+): Este regex debería coincidir con una palabra en el proceso de actualización. Sin embargo, hay un espacio después de :word, lo que no es válido en una ruta de Express.
/:word([a-z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+): Este regex coincide con una palabra en la URL, similar al primer regex, para la ruta de eliminación de palabra.
'*': Este es un comodín que coincide con cualquier ruta que no haya sido definida anteriormente. En este caso, se utiliza para manejar solicitudes que no coinciden con ninguna de las rutas anteriores.
*/