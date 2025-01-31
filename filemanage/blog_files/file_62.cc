#include "v8.h"
#include "node.h"
using namespace v8; 
using namespace node;

static Handle<Value> func(const Arguments& args){    
   return String::New("the return value");
}

static Handle<Value> func2(const Arguments& args){    
   return True();
}

extern "C" void  init (Handle<Object> target){    
   HandleScope scope;        
   target->Set(String::New("hello"), String::New("world"));    
   target->Set(String::New("func"), FunctionTemplate::New(func)->GetFunction());    
   NODE_SET_METHOD(target, "func2", func2);

} 