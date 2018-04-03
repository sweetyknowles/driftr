class Post < ApplicationRecord
  belongs_to :city
 
  attr_accessible :title :content

  # the content cannot be empty
validates :title, :text :content, :presence =>true
# user is restricted to the content length between 1-200
validates :title, :length => { :minimum => 1 }
validates :title, :length => { :maximum => 200}
#this will not allow the user to duplicate the post.
validates :title, :post, uniqueness:true
end
  
