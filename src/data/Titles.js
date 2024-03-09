import { DataGrid1 } from '@/data/DataGrid'
import { DataGrid2 } from '@/data/DataGrid'
import { DataGrid3 } from '@/data/DataGrid'
import { DataGrid4 } from '@/data/DataGrid'
import { DataGrid5 } from '@/data/DataGrid'
export const Titles =[
    {
        id: 1 ,
        title:'منظومة الاستشارات',
        showActiveBox:true,
        dataset: DataGrid1
    },
    {
        id: 2 ,
        title:' نافذة الخدمات',
        showActiveBox:true,
        dataset: DataGrid2
    },
    {
        id: 3,
        title:'دليل المكتبات ',
        showActiveBox:false,
        dataset: DataGrid3
    },
    {
        id: 4 ,
        title:'الأدلة الرقمية ',
        showActiveBox:false,
        dataset: DataGrid4
    },
    {
        id:5,
        title :'المكاتب الإلكترونية',
        showActiveBox:true,
        dataset: DataGrid5
    }
];