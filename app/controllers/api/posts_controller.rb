class Api::PostsController < ApplicationController
    def index
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
    end

    private

    def post_params
        params.require(:post).permit(:title, :text, :city_id)

    end
    
end
