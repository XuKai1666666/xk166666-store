import { Hot } from "./hot";

export class HotService {
    hots: Hot[] = [
        { category: '手机', name: 'iphone13', price: 1999, stocknum: 10, soldnum: 0 },
        { category: '电视', name: '小米电视', price: 999, stocknum: 10, soldnum: 0 },
        { category: '笔记本 平板', name: '联想拯救者 R9000P', price: 7499, stocknum: 10, soldnum: 0 },
    ];
    //返回
    getHotServiceData() {
        return this.hots;
    }
}