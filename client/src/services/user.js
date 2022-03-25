const routes = {
    signup: () => {
        return {
            url: "/user/signup",
            method: "post"
        };
    },
    signin: () => {
        return {
            url: "user/signin",
            method: "post"
        };
    }
}

export default routes;