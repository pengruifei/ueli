import path from 'path';

export default class InputValidationService {

    IsValidHttpOrHttpsUrl(url) {
        if (url.endsWith('.exe')) return false;

        let expression = /^[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?$/gi;
        let regex = new RegExp(expression);

        if (url.match(regex))
            return true;

        return false;
    }

    IsValidGoogleQuery(query) {
        if (!query.startsWith('g:'))
            return false;

        if (query.length <= 0)
            return false;

        return true;
    }

    IsValidWikipediaQuery(query) {
        if (query.startsWith('wiki:'))
            return true;
        else
            return false;
    }

    IsElectronizrCommand(command) {
        if (command === 'exit' || command.startsWith('ezr:'))
            return true;
        
        return false;
    }

    IsValidWindowsPath(path) {
        let expression = /^[a-z]:\\(?:[^\\/:*?"<>|\r\n]+\\)*[^\\/:*?"<>|\r\n]*$/i;
        let regex = new RegExp(expression);

        return path.match(regex);
    }

    IsShellCommand(input) {
        if(input.startsWith('>'))
            return true;

        return false;
    }
}