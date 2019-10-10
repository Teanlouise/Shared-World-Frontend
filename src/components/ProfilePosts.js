import React from 'react';
import { List, Card} from 'antd';

const { Meta } = Card;

const ProfilePosts = (props) => {
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      pagination={{ 
        onChange: page => { console.log(page); }, 
        pageSize: 12, 
      }}
      dataSource={props.data}
      renderItem={item => ( 
        <List.Item>
          <Card 
            hoverable
            style= {{ width: 300, textAlign: 'center' }}
              cover={
                <img 
                  style={{ height: 250, objectFit: 'cover' }}
                  src={item.image}
                  alt="post_image"
                />
              }
          >
            <Meta                
              // avatar={<Avatar src={item.author && item.author.user_image}/>}
              title={<a href={`/post/${item.id}`}>{item.title}</a>}
              description={item.description}
            />
          </Card>
        </List.Item>   
      )}
    />
  )
}

export default ProfilePosts;