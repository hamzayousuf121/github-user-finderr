import { Octokit } from "@octokit/rest";
// import axios from "axios";
const octokit = new Octokit()

export const getPublicGists = () => octokit.gists.listPublic()


export const getGistForUser = (username) => octokit.gists.listForUser({ username })


