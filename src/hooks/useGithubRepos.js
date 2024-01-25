import {useEffect, useState} from "react";

export default function useGithubRepos(profile) {

    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        setIsLoading(false);
        setIsError(false);

        const baseUrl = `https://api.github.com`;
        const controller = new AbortController();
        const options = {signal: controller.signal, headers: {"Authorization": `${import.meta.env.VITE_API_KEY}`}}

        async function fetchRepos() {
            setIsLoading(true)

            const response = await fetch(`${baseUrl}/users/${profile}/repos`, options);
            if (!(response.ok)) {throw new Error("Nao foi possivel fazer o pedido: " + response.status)}
            const repos = await response.json();
            debugger;
            const filteredRepos = repos.filter(repo => !repo.archived && repo.topics.every(topic => !["course", "in-progress", "profile-readme"].includes(topic)))
            debugger;

            const repoObjects = await Promise.allSettled(filteredRepos.map( async (repo) => {
                const repoLanguages = await fetchLanguages(repo.name)
                const repoImg = await fetchImage(repo.name)
                return {
                    name: repo.name,
                    description: repo.description,
                    languages: repoLanguages,
                    img: repoImg
                }
            }));

            return repoObjects.filter(repoObject => repoObject.status === "fulfilled").map(repoObject => repoObject.value)
        }

        async function fetchLanguages(repoName) {
            // eslint-disable-next-line no-useless-catch
            try {
                const response = await fetch(`${baseUrl}/repos/${profile}/${repoName}/languages`, options);
                if (!(response.ok)) {throw new Error("Nao foi possivel fazer o pedido: " + response.status)}
                const languages = await response.json();
                return Object.keys(languages);
            } catch (error) {
                throw error;
            }
        }

        async function fetchImage(repoName) {
            // eslint-disable-next-line no-useless-catch
            try {
                const response = await fetch(`${baseUrl}/repos/${profile}/${repoName}/contents/.github/project.png`, options);
                if (!(response.ok)) {throw new Error("Nao foi possivel fazer o pedido: " + response.status)}
                const data = await response.json();
                return data.content;
            } catch (error) {
                throw error;
            }
        }

        fetchRepos()
            .then(repoObjects => {
                setData(repoObjects);
                setIsLoading(false)
            })
            .catch(error => {
                console.log("Ocorreu um erro: " + error);
                setIsLoading(false)
                setIsError(true)
            });

        return () => controller.abort();

    }, [profile]);

    return {data, isLoading, isError};
}