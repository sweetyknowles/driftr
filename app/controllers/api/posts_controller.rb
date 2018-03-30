class Api::PostsController < ApplicationController
    def index
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

