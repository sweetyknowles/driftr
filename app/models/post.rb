class Post < ApplicationRecord
  belongs_to :city
<<<<<<< HEAD
 
  attr_accessible :title :content

  # the content cannot be empty
validates :title :content, :presence =>true
# user is restricted to the content length between 1-200
validates :title, :length => { :minimum => 1 }
validates :title, :length => { :maximum => 200}
#this will not allow the user to duplicate the post.
validates  :title :uniqueness =>true
=======

  
>>>>>>> 77af0aa7e9a05da01846b8d3c04ac0ac03c8d115
end
  
