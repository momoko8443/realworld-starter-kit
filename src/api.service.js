import axios from 'axios'
import JwtService from './jwt.service'
import { API_URL } from './config'

class ApiService {
    constructor() {
      axios.defaults.baseURL = API_URL
    }

    setHeader() {
        axios.defaults.headers.common['Authorization'] = `Token ${JwtService.getToken()}`
    }

    query(resource, params) {
      return axios
        .get(resource, params)
        .catch((error) => {
          throw new Error(`[RWU] ApiService ${error}`)
        })
    }
  
    get(resource, slug = '') {
      return axios
        .get(`${resource}/${slug}`)
        .catch((error) => {
          throw new Error(`[RWU] ApiService ${error}`)
        })
    }
  
    post(resource, params) {
      return axios.post(`${resource}`, params)
    }
  
    update(resource, slug, params) {
      return axios.put(`${resource}/${slug}`, params)
    }
  
    put(resource, params) {
      return axios
        .put(`${resource}`, params)
    }
  
    delete(resource) {
      return axios
        .delete(resource)
        .catch((error) => {
          throw new Error(`[RWU] ApiService ${error}`)
        })
    }
}

const apiService = new ApiService();

const AuthService = {
  register(params) {
    return apiService.post('users', {
      'user': params
    })
  },
  login(params) {
    return apiService.post('users/login', {
      'user': params
    }).then(function(result){
      if(result.status === 200){
        var user = result.data;
        var token = user.token;
        JwtService.saveToken(token);
        return user;
      }
    })
  },
  get() {
    return apiService.get('users')
  },
  update(params) {
    return apiService.put('users/login', {
      'user': params
    })
  }

}

const TagsService = {
  query() {
    return apiService.get('tags')
  }
}

const ArticlesService = {
  query(type, params) {
    return apiService
      .query(
        'articles' + (type === 'feed' ? '/feed' : ''), {
          params: params
        }
      )
  },
  get(slug) {
    return apiService.get('articles', slug)
  },
  create(params) {
    return apiService.post('articles', {
      article: params
    })
  },
  update(slug, params) {
    return apiService.update('articles', slug, {
      article: params
    })
  },
  destroy(slug) {
    return apiService.delete(`articles/${slug}`)
  }
}

const CommentsService = {
  get(slug) {
    if (typeof slug !== 'string') {
      throw new Error('[RWU] CommentsService.get() article slug required to fetch comments')
    }
    return apiService.get('articles', `${slug}/comments`)
  },

  post(slug, payload) {
    return apiService.post(
      `articles/${slug}/comments`, {
        comment: {
          body: payload
        }
      })
  },

  destroy(slug, commentId) {
    return ApiService
      .delete(`articles/${slug}/comments/${commentId}`)
  }
}

const FavoriteService = {
  add(slug) {
    return apiService.post(`articles/${slug}/favorite`)
  },
  remove(slug) {
    return apiService.delete(`articles/${slug}/favorite`)
  }
}

export const ConduitAPIs = {
  tagsAPI: TagsService,
  favoriteAPI: FavoriteService,
  commentsAPI: CommentsService,
  articlesAPI: ArticlesService,
  authAPI: AuthService
}