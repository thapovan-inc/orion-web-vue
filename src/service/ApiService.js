import API from '@/service/API';

export default {
    get(httpUrl) {
        const promise = new Promise((resolve, reject) => {
            this.postRequestGRPC();
            API.get(httpUrl)
                .then(data => {
                    this.postResponseGRPC();
                    resolve(data);
                })
                .catch(err => reject(err));
        });
        return promise;
    },
    postRequestGRPC() {
    },
    postResponseGRPC() {
    },
}