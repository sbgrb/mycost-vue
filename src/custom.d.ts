type RootState = {
    recordList: RecordItem[];
    tagList: Tag[];
    currentTag?: Tag;
    creatRecordError: Error | null ;
    creatTagError: Error | null ;
}
type RecordItem ={
    tags: Tag[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: string;
}
type Tag ={
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success' | 'duplicated';  //success 成功  duplicated 重复
    save: () => void;
    remove: (id: string) => boolean;
    update: (id: string , name: string) => 'success' | 'not found' | 'duplicated';
}

