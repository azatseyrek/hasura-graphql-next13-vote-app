CREATE TABLE "public"."options" ("id" serial NOT NULL, "title" text NOT NULL, "question_id" int2 NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("question_id") REFERENCES "public"."questions"("id") ON UPDATE restrict ON DELETE cascade);