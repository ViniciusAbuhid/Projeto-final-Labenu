"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicDataBase = void 0;
const BaseDataBase_1 = __importDefault(require("./BaseDataBase"));
class MusicDataBase extends BaseDataBase_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'Genres_Spotenu';
    }
    addGenre(name, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getConnection().insert({ name, id }).into(this.tableName);
        });
    }
    getGenreById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.getConnection().select('*').where({ id }).from(this.tableName);
            return result;
        });
    }
    getGenreByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.getConnection().select('*').where({ name }).from(this.tableName);
            return result;
        });
    }
    getAllGenres() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.getConnection().select("*").from(this.tableName);
            return result;
        });
    }
    deleteGenre(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getConnection().delete().from(this.tableName).where({ id });
        });
    }
    createAlbumAndGenreRelation(id_album, id_genre) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getConnection().insert({ id_album, id_genre }).into('Albumns_Genres_Spotenu');
        });
    }
    getRelationAlbumAndGenre(id_genre) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.getConnection().select('*').where({ id_genre })
                .from('Albumns_Genres_Spotenu');
            return result;
        });
    }
    deleteRelationBetweenGenreAndAlbum(id_genre, id_album) {
        return __awaiter(this, void 0, void 0, function* () {
            id_genre ? yield this.getConnection().delete().from('Albumns_Genres_Spotenu').where({ id_genre }) :
                yield this.getConnection().delete().from('Albumns_Genres_Spotenu').where({ id_album });
        });
    }
    getAllAlbunsById(artist_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.getConnection().select("*").where({ artist_id }).from('Albums_Spotenu');
            return result;
        });
    }
    getAlbumById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.getConnection().select('*').where({ id }).from('Albums_Spotenu');
            return result;
        });
    }
    createAlbum(name, id, artist_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.getConnection().insert({
                name, id, artist_id
            }).into('Albums_Spotenu');
        });
    }
    deleteAlbum(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getConnection().delete().from('Albums_Spotenu').where({ id });
        });
    }
    deleteAlbumByArtistId(artist_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getConnection().delete().from('Albums_Spotenu').where({ artist_id });
        });
    }
    deleteRelationAlbumMusic(album_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getConnection().delete().from('Musics_Spotenu').where({ album_id });
        });
    }
    getAllMusicsFromCertainAlbum(album_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.getConnection().select('*').where({ album_id }).from('Musics_Spotenu');
            return result;
        });
    }
    addMusic(name, id, album_id, link) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getConnection().insert({ name, id, album_id, link }).into('Musics_Spotenu');
        });
    }
    getMusicById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.getConnection().select('*').where({ id }).from('Musics_Spotenu');
            return result;
        });
    }
    deleteMusic(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getConnection().delete().from('Musics_Spotenu').where({ id });
        });
    }
    getMusicByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.getConnection().raw(`
        select mus.link, a.name as album, mus.name, u.name as artist
        from Musics_Spotenu as mus
        join Albums_Spotenu as a
        on mus.album_id = a.id
        join Users_Spotenu as u
        on a.artist_id = u.id
        where mus.name like '%${name}%'
        order by mus.name;
        `);
            return result[0];
        });
    }
}
exports.MusicDataBase = MusicDataBase;
