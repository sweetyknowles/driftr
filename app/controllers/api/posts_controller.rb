class Api::PostsController < ApplicationController
    def index
<<<<<<< HEAD
    @posts = Post.all
    render json: {
        posts: @posts
    }
  end

    def show
    @cities = City.find(params[:id])
    @post = @cities.posts
    render json: {
        post: @post,
        cities: @cities
    }
  end

  def create
    @post = Post.create(post_params)
    render json: {
    post: @post
    }
end

def update
    @post = Post.find(params [:id])
    @post.update!(post_params)

    render json: {
        post: @post

    }
end

def destroy
    Post.find(params[:id]).destroy

    render json: {
        message: "This post has been successfully deleted."
    }
end

private

def post_params
    params.require(:post).permit(:title, :text)
end
end

=======
        @cities = City.find(params[:city_id])
        @posts = @cities.posts
        render json: {
            posts: @posts
        }

    end

    def show 
        @post = Post.find(params[:id])
        render json: {
            post: @post
        }
    end

    def create
        @city = City.find(params[:city_id])

        @post = @city.posts.create!(post_params)
        render json: {
            post: @post
        }
    end 

    def update 
        @city = City.find(params[:city_id])
        @post = @city.posts.find(params[:id])

        @post.update!(post_params)
        render json: {
            post: @post
        }
    end

    def destroy
        Post.find(params[:id]).destroy

        redirect_to :api_city_posts
    end

    private

    def post_params
        params.require(:post).permit(:title, :text, :city_id)

    end
    
end
>>>>>>> a37e4630ddf2c8201a0f211ea3ade26f0437d75c
