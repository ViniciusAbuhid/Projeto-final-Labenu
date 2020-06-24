import BaseDataBase from "./BaseDataBase";

export class MusicDataBase extends BaseDataBase{
    tableName = 'Genres_Spotenu'

    public async addGenre(name:string, id:string){
        await this.getConnection().insert({name, id}).into(this.tableName)
    }

    public async getGenreById(id:string){
        const result = await this.getConnection().select('*').where({id}).from(this.tableName)
        return result
    }

    public async getGenreByName(name:string){
        const result = await this.getConnection().select('*').where({name}).from(this.tableName)
        return result
    }

    public async getAllGenres(){
        const result = await this.getConnection().select("*").from(this.tableName)
        return result
    }
    
    public async deleteGenre(id:string){
        await this.getConnection().delete().from(this.tableName).where({id})
    }

    public async getAllAlbunsById(artist_id: string){
        const result = await this.getConnection().select("*").where({artist_id}).from('Albums_Spotenu')
        return result
    }

    public async getAlbumById(id:string){
        const result = await this.getConnection().select('*').from('Albums_Spotenu')
        return result
    } 

    public async createAlbum(name: string, id: string, artist_id: string){
        const result = await this.getConnection().insert({
            name, id, artist_id
        }).into('Albums_Spotenu')
        console.log(result)
        return result
    }

    public async createAlbumAndGenreRelation(id_album: string, id_genre:string){
        await this.getConnection().insert({id_album, id_genre}).into('Albumns_Genres_Spotenu')
    }

    public async getAllMusicsFromCertainAlbum(album_id: string){
        const result = await this.getConnection().select('*').where({album_id}).from('Musics_Spotenu')
        return result
    }

    public async addMusic(name:string, id:string, album_id: string,  link:string){
        await this.getConnection().insert({name, id, album_id, link}).into('Musics_Spotenu')
    }

    public async getMusicById(id:string){
        const result = await this.getConnection().select('*').where({id}).from('Musics_Spotenu')
        return result
    }

    public async deleteMusic(id:string){
        await this.getConnection().delete().from('Musics_Spotenu').where({id})
    }
}