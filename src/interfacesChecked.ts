export interface MassInterface {
    name: string,
    zip: string
}

// export interface DataApi {
//    "city": {
//       "id"?: number,
//       "name"?: string,
//       "coord"?:{
//          "lon"?: number,
//          "lat"?: number
//       },
//       "country"?: string,
//       "population"?:number 
//    },
//    "cod"?: string,
//    "message"?: number,
//    "cnt"?: number,
//    "list"?:[
//       {
//          "dt"?: number,
//          "temp"?:{
//             "day"?: number,
//             "min"?: number,
//             "max"?: number,
//             "night"?: number,
//             "eve"?: number,
//             "morn"?: number
//          },
//          "pressure"?: number,
//          "humidity"?: number,
//          "weather"?:[
//             {
//                "id"?: number,
//                "main"?: string,
//                "description"?: string,
//                "icon"?: string
//             }
//          ],
//          "speed"?: number,
//          "deg"?: number,
//          "clouds"?: number,
//          "rain"?: number
//       },
//       {
//          "dt"?: number,
//          "temp"?:{
//             "day"?: number,
//             "min"?: number,
//             "max"?: number,
//             "night"?: number,
//             "eve"?: number,
//             "morn"?: number
//          },
//          "pressure"?: number,
//          "humidity"?: number,
//          "weather"?:[
//             {
//                "id"?: number,
//                "main"?: string,
//                "description"?: string,
//                "icon"?: string
//             }
//          ],
//          "speed"?: number,
//          "deg"?: number,
//          "clouds"?: number
//       },
//    ]
// }