export default class MyUtilObject {


  static deserializeFromJson<T> (jsonString: string) : T {
  
      let obj: T = JSON.parse(jsonString);

      return obj;

  }

  static serializeToJson<T> (obj: T) : string {
      
    return JSON.stringify(obj);

}


}
